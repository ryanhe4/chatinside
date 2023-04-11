import { FastifyPluginAsync } from 'fastify'
import { meRoute } from './me'
import authRoute from './auth/index'
import { postRoute } from './post'

const api: FastifyPluginAsync = async (fastify) => {
  fastify.register(authRoute, { prefix: '/auth' })
  fastify.register(meRoute, { prefix: '/me' })
  fastify.register(postRoute, { prefix: '/post' })
}

export default api
