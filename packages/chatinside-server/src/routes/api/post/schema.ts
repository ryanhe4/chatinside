import { createRouteSchema, RoutesType } from '../../../lib/routeSchema.js'
import { Type } from '@sinclair/typebox'

export const PostSchema = Type.Object({
  id: Type.Integer(),
  title: Type.String(),
  description: Type.String(),
  draftsman: Type.String(),
})
export const PostBody = Type.Object({
  draftsman: Type.String(),
  password: Type.String(),
  title: Type.String(),
  description: Type.String(),
})

export const PostAuthBody = Type.Object({
  draftsman: Type.String(),
  password: Type.String(),
})

const PostParamsSchema = Type.Object({
  id: Type.Integer(),
})
export const PostRouteSchema = createRouteSchema({
  Create: {
    tags: ['post'],
    body: PostBody,
    response: {
      201: PostSchema,
    },
  },
  Update: {
    tags: ['post'],
    params: PostParamsSchema,
    body: PostBody,
    response: {
      200: PostSchema,
    },
  },
  Delete: {
    tags: ['post'],
    params: PostParamsSchema,
    body: PostAuthBody,
    response: {
      204: Type.Null(),
    },
  },
})

export type PostRoute = RoutesType<typeof PostRouteSchema>
