import { FastifySchema } from 'fastify/types/schema'
import { userSchema } from './../../../schema/userSchema'
import { createAppErrorSchema } from '../../../lib/AppError'

export const getMeSchema: FastifySchema = {
  response: {
    200: userSchema,
    401: createAppErrorSchema(
      {
        name: 'UnauthorizedError',
        message: 'Unauthorized',
        statusCode: 401,
        payload: {
          isExpiredToken: true,
        },
      },
      {
        type: 'object',
        properties: {
          isExpiredToken: {
            type: 'boolean',
          },
        },
      },
    ),
  },
}
