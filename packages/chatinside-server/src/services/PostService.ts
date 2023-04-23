import db from '../database/client.js'
import bcrypt from 'bcrypt'
import AppError from '../lib/AppError.js'

const SALT_ROUNDS = 10

interface PostParam {
  draftsman: string
  password: string
  title: string
  description: string
}

class PostService {
  private static instance: PostService
  public static getInstance() {
    if (!PostService.instance) {
      PostService.instance = new PostService()
    }
    return PostService.instance
  }

  async getPosts() {
    return await db.item.findMany()
  }

  async create(param: PostParam) {
    console.log(param)
    const { password, draftsman, description, title } = param
    const hash = await bcrypt.hash(password, SALT_ROUNDS)
    return await db.item.create({
      data: {
        title,
        description,
        draftsman,
        passwordHash: hash,
      },
    })
  }

  async update(id: number, param: PostParam) {
    const post = await db.item.findUnique({ where: { id } })
    if (!post) {
      throw new AppError('NotFoundError')
    }

    if (!post.passwordHash) {
      throw new AppError('AuthenticationError')
    }

    const result = await bcrypt.compare(param.password, post.passwordHash)
    if (!result) {
      throw new AppError('AuthenticationError')
    }
    const { description, title } = param

    return await db.item.update({
      data: {
        title,
        description,
      },
      where: {
        id,
      },
    })
  }

  async delete(id: number, param: Pick<PostParam, 'password' | 'draftsman'>) {
    const post = await db.item.findUnique({ where: { id } })

    if (!post) {
      throw new AppError('NotFoundError')
    }

    if (!post.passwordHash) {
      throw new AppError('AuthenticationError')
    }

    const result = await bcrypt.compare(param.password, post.passwordHash)
    if (!result) {
      throw new AppError('AuthenticationError')
    }

    return await db.item.delete({
      where: {
        id,
      },
    })
  }
}

export default PostService
