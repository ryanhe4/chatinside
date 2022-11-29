import Fastify from 'fastify'
import fastifySwagger from '@fastify/swagger'
import routes from './routes/index.js'
import { swaggerConfig } from './config/swagger.js'

const server = Fastify({
  logger: true,
})

await server.register(fastifySwagger, swaggerConfig)
server.register(routes)

server.listen({ port: 4000 })
