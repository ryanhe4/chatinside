import Fastify, { FastifyInstance } from 'fastify'
import fastifySwagger from '@fastify/swagger'
import fastifyCookie from '@fastify/cookie'
import routes from './routes/index'
import { authPlugin } from './plugins/authPlugin'
import { swaggerConfig } from './lib/swagger'
import AppError from './lib/AppError'
import 'dotenv/config'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import cors from '@fastify/cors'

export class Server {
  private fastify: FastifyInstance

  constructor() {
    this.fastify = Fastify({ logger: true }).withTypeProvider<TypeBoxTypeProvider>()
  }
  async build() {
    this.fastify.register(cors, {
      origin: /localhost/,
      allowedHeaders: ['Cookie', 'Content-Type'],
      credentials: true,
    })

    await this.fastify.register(fastifySwagger, swaggerConfig)
    this.fastify.register(fastifyCookie)

    this.fastify.setErrorHandler(async (error, request, reply) => {
      reply.statusCode = error.statusCode ?? 500
      if (error instanceof AppError) {
        return {
          name: error.name,
          message: error.message,
          statusCode: error.statusCode,
          payload: error.payload,
        }
      }

      if (error.statusCode === 400) {
        return {
          name: 'BadRequest',
          message: error.message,
          statusCode: 400,
        }
      }

      return error
    })

    this.fastify.register(authPlugin)
    this.fastify.register(routes)
  }

  run() {
    this.fastify.listen({ port: 4000 })
  }
}
