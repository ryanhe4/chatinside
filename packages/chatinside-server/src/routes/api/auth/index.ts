import { FastifyPluginAsync, FastifyReply } from 'fastify'
import AppError from '../../../lib/AppError'
import UserService from '../../../services/UserService'
import { AuthBodyType, loginSchema, refreshTokenSchema, registerSchema } from '../schema/authSchema'
import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox'

const authRoute: FastifyPluginAsyncTypebox = async (fastify) => {
  const userService = UserService.getInstance()

  fastify.post<{ Body: AuthBodyType }>('/login', { schema: loginSchema }, async (request, reply) => {
    const authResult = await userService.login(request.body)
    setTokenCookie(reply, authResult.tokens)
    return authResult
  })

  fastify.post<{ Body: AuthBodyType }>('/register', { schema: registerSchema }, async (request) => {
    return userService.register(request.body)
  })
  fastify.post<{ Body: { refreshToken?: string } }>(
    '/refresh',
    { schema: refreshTokenSchema },
    async (request, reply) => {
      const refreshToken = request.body.refreshToken ?? request.cookies.refresh_token ?? ''
      if (!refreshToken) {
        throw new AppError('BadRequestError')
      }
      const tokens = await userService.refreshToken(refreshToken)
      setTokenCookie(reply, tokens)
      return tokens
    },
  )
}

function setTokenCookie(reply: FastifyReply, tokens: { accessToken: string; refreshToken: string }) {
  reply.setCookie('access_token', tokens.accessToken, {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60),
    path: '/',
  })
  reply.setCookie('refresh_token', tokens.refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    path: '/',
  })
}

export default authRoute
