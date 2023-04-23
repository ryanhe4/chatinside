import { FastifyPluginAsync } from 'fastify'
import PostService from '../../../services/PostService.js'
import { PostRoute, PostRouteSchema } from './schema.js'

export const postRoute: FastifyPluginAsync = async (fastify) => {
  fastify.get('/', async (request) => {
    return await PostService.getInstance().getPosts()
  })
  fastify.post<PostRoute['Create']>('/', { schema: PostRouteSchema.Create }, async (request) => {
    return PostService.getInstance().create(request.body)
  })
  fastify.put<PostRoute['Update']>('/:id', { schema: PostRouteSchema.Update }, async (request) => {
    return PostService.getInstance().update(request.params.id, request.body)
  })
  fastify.delete<PostRoute['Delete']>('/:id', { schema: PostRouteSchema.Delete }, async (request, response) => {
    await PostService.getInstance().delete(request.params.id, request.body)
    response.status(204)
  })
}
