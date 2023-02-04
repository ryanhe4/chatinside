import { FastifyPluginAsync } from 'fastify'
import api from './api/index'

const routes: FastifyPluginAsync = async (fastify) => {
  fastify.register(api, { prefix: '/api' })
}

export default routes
