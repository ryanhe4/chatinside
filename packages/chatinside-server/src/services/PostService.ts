class PostService {
  private static instance: PostService
  public static getInstance() {
    if (!PostService.instance) {
      PostService.instance = new PostService()
    }
    return PostService.instance
  }

  add(a: number, b: number) {
    return a + b
  }
}

export default PostService
