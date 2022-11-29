import Fastify from 'fastify'
import fastifySwagger from '@fastify/swagger'
import routes from './routes/index.js'
import { authPlugin } from './plugins/authPlugin.js'
import { swaggerConfig } from './config/swagger.js'
import AppError from './lib/AppError.js'
import 'dotenv/config'

const server = Fastify({
  logger: true,
})

await server.register(fastifySwagger, swaggerConfig)

server.setErrorHandler(async (error, request, reply) => {
  reply.statusCode == error.statusCode ?? 500
  if (error instanceof AppError) {
    return {
      name: error.name,
      message: error.message,
      statusCode: error.statusCode,
    }
  }
  return error
})

server.register(authPlugin)
server.register(routes)

server.listen({ port: 4000 })
