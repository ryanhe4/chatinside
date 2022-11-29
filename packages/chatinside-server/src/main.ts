import Fastify from 'fastify'
import fastifySwagger from '@fastify/swagger'
import routes from './routes/index.js'
import { swaggerConfig } from './config/swagger.js'
import AppError from './lib/AppError.js'
import db from './lib/db.js'

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
  console.log({ name: error.name })
  return error
})

server.register(routes)

server.listen({ port: 4000 })
