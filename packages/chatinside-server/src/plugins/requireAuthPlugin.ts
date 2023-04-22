import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import AppError from '../lib/AppError.js'
import { FastifyPluginAsyncTypebox } from '../lib/types'

const requireAuthPluginAsync: FastifyPluginAsync = async (fastify) => {
  fastify.addHook('preHandler', async (request) => {
    if (request.isExpiredToken) {
      throw new AppError('UnauthorizedError', {
        isExpiredToken: true,
      })
    }
    if (!request.user) {
      throw new AppError('UnauthorizedError', {
        isExpiredToken: false,
      })
    }
  })
}

const requireAuthPlugin = fp(requireAuthPluginAsync, {
  name: 'requireAuthPlugin',
})

export function createAutorizedRoute(plugin: FastifyPluginAsyncTypebox) {
  const wrappedPlugin: FastifyPluginAsyncTypebox = async (fastify, opts) => {
    fastify.register(requireAuthPlugin)
    return plugin(fastify, opts)
  }
  return wrappedPlugin
}

export default requireAuthPlugin
