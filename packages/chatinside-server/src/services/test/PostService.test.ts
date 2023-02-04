import PostService from '../PostService'

describe('PostService', () => {
  it('add', () => {
    const service = PostService.getInstance()
    expect(service.add(1, 2)).toBe(3)
  })
})
