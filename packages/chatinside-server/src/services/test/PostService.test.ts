import PostService from '../PostService'

describe('PostService', () => {
  it('add', () => {
    const service = PostService.getInstance()
    expect(service.create('test', 'test2', 'test', 'test')).toBe(3)
  })
})
