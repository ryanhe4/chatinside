import db from "../database/client";

class PostService {
  private static instance: PostService
  public static getInstance() {
    if (!PostService.instance) {
      PostService.instance = new PostService()
    }
    return PostService.instance
  }

  async getPosts() {
    const result = await db.item.findMany()
    return result
  }

  async create(username:string, password:string, contents:string, title:string) {
    return 'create'
  }

  async update(id:number, username:string, password:string, contents:string, title:string) {
    return 'update'
  }

  async delete(id: number, username:string, password:string, contents:string, title:string) {
    return 'delete'
  }
}

export default PostService
