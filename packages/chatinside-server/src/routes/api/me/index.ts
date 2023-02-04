import { FastifyPluginAsync } from 'fastify'
import { getMeSchema } from './schema'
import AppError from '../../../lib/AppError'
import requireAuthPlugin from '../../../plugins/requireAuthPlugin'

export const meRoute: FastifyPluginAsync = async (fastify) => {
  fastify.register(requireAuthPlugin)
  fastify.get('/', { schema: getMeSchema }, async (request) => {
    return request.user
  })
}
