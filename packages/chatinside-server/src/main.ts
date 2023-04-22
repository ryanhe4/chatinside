import 'dotenv/config'
import Fastify from 'fastify'
import fastifySwagger from '@fastify/swagger'
import fastifyCookie from '@fastify/cookie'
import routes from './routes/index.js'
import { authPlugin } from './plugins/authPlugin.js'
import { swaggerConfig } from './lib/swagger.js'
import AppError from './lib/AppError.js'
import 'dotenv/config'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import cors from '@fastify/cors'

const server = Fastify({
  logger: true,
}).withTypeProvider<TypeBoxTypeProvider>()

server.register(cors, {
  origin: /localhost/,
  allowedHeaders: ['Cookie', 'Content-Type'],
  credentials: true,
})

// if (process.env.NODE_ENV === 'development') {
//   server.register(cors, {
//     origin: /localhost/,
//     allowedHeaders: ['Cookie', 'Content-Type'],
//     credentials: true,
//   })
// } else {
//   server.register(cors, {
//     origin: /veltrends.com/,
//     allowedHeaders: ['Cookie', 'Content-Type'],
//     credentials: true,
//   })
// }

if (process.env.NODE_ENV !== 'production') {
  await server.register(fastifySwagger, swaggerConfig)
}
server.register(fastifyCookie)
server.setErrorHandler(async (error, request, reply) => {
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

server.register(authPlugin)
server.register(routes)

server.listen({ port: 4000 })
