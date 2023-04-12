import { FastifyPluginAsync, FastifyReply } from 'fastify'
import AppError from '../../../lib/AppError'
import userService from '../../../services/UserService'
import { AuthRoute, AuthRouteSchema } from './schema'

const authRoute: FastifyPluginAsync = async (fastify) => {
  fastify.post<AuthRoute['Login']>('/login', { schema: AuthRouteSchema.Login }, async (request, reply) => {
    const authResult = await userService.login(request.body)
    setTokenCookie(reply, authResult.tokens)
    return authResult
  })

  fastify.post<AuthRoute['Register']>('/register', { schema: AuthRouteSchema.Register }, async (request) => {
    return userService.register(request.body)
  })
  fastify.post<AuthRoute['RefreshToken']>(
    '/refresh',
    { schema: AuthRouteSchema.RefreshToken },
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
