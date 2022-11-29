import { FastifyPluginAsync } from 'fastify'
import { meRoute } from './me/index.js'
import authRoute from './auth/index.js'

const api: FastifyPluginAsync = async (fastify) => {
  fastify.register(authRoute, { prefix: '/auth' })
  fastify.register(meRoute, { prefix: '/me' })
}

export default api
