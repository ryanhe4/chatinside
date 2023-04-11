import { FastifyPluginAsync } from 'fastify'
import PostService from '../../../services/PostService'

export const postRoute: FastifyPluginAsync = async (fastify) => {
  fastify.get('/', async (request) => {
    return await PostService.getInstance().getPosts()
  })
  fastify.post('/', async (request) => {
    return PostService.getInstance().create('t', 't', 't', 't')
  })
  fastify.put('/', async (request) => {
    return PostService.getInstance().update(1, 't', 't', 't', 't')
  })
  fastify.delete('/', async (request) => {
    return PostService.getInstance().delete(1, 't', 't', 't', 't')
  })
}
