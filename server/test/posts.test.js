require('dotenv').config()
const axios = require('axios')
const crypto = require('crypto')
const postsService = require('../services/postsService')

const generate = () => {
  return crypto.randomBytes(20).toLocaleString('hex')
}

const request = (url, method, data) => {
  return axios({ url, method, data })
}

describe('Testing routes', () => {
  test('Should get posts', async () => {
    const post1 = await postsService.savePost({ title: generate(), content: generate() })
    const post2 = await postsService.savePost({ title: generate(), content: generate() })
    const post3 = await postsService.savePost({ title: generate(), content: generate() })

    const resp = await request(`http://localhost:${process.env.port}/posts`, 'get')

    const posts = resp.data
    expect(posts).toHaveLength(3)
    await postsService.deletePost(post1.id)
    await postsService.deletePost(post2.id)
    await postsService.deletePost(post3.id)
  })

  test('Should save post', async () => {
    const data = { title: generate(), content: generate() }
    const resp = await request(`http://localhost:${process.env.port}/posts`, 'post', data)

    const post = resp.data
    expect(post.title).toBe(data.title)
    expect(post.content).toBe(data.content)
    await postsService.deletePost(post.id)
  })

  test('Should update post', async () => {
    const post = await postsService.savePost({ title: generate(), content: generate() })
    post.title = generate()
    post.content = generate()

    await request(`http://localhost:${process.env.port}/posts/${post.id}`, 'put', post)
    const UpdatedPost = await postsService.getPost(post.id)

    expect(post.title).toBe(UpdatedPost.title)
    expect(post.content).toBe(UpdatedPost.content)
    await postsService.deletePost(post.id)
  })

  test('Should delete post', async () => {
    const post = await postsService.savePost({ title: generate(), content: generate() })
    post.title = generate()
    post.content = generate()

    await request(`http://localhost:${process.env.port}/posts/${post.id}`, 'delete')
    
    const posts = await postsService.getPosts()

    expect(posts).toHaveLength(0)
  })
})
