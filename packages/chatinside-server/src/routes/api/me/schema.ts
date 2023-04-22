import { FastifySchema } from 'fastify/types/schema'
import { createAppErrorSchema } from '../../../lib/AppError.js'
import { UserSchema } from '../auth/schema.js'

export const getMeSchema: FastifySchema = {
  response: {
    200: UserSchema,
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
