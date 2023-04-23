import { FastifyPluginAsync } from 'fastify'
import { meRoute } from './me/index.js'
import authRoute from './auth/index.js'
import { postRoute } from './post/index.js'

const api: FastifyPluginAsync = async (fastify) => {
  fastify.register(authRoute, { prefix: '/auth' })
  fastify.register(meRoute, { prefix: '/me' })
  fastify.register(postRoute, { prefix: '/post' })
}

export default api
