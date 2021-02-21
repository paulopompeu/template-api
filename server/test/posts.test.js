require('dotenv').config()
const axios = require('axios')
const crypto = require('crypto')
const postsService = require('../services/postsService')

const generate = () => {
  return crypto.randomBytes(20).toLocaleString('hex')
}

describe('Testing routes', () => {
  test('Should get posts', async () => {
    const post1 = await postsService.savePost({ title: generate(), content: generate()})
    const post2 = await postsService.savePost({ title: generate(), content: generate()})
    const post3 = await postsService.savePost({ title: generate(), content: generate()})
    // console.log('post1')
    // console.log(post1)
    const resp = await axios({
      url: `http://localhost:${process.env.port}/posts`,
      method: 'get',
    })
    const posts = resp.data
    expect(posts).toHaveLength(3)
    await postsService.deletePost(post1.id)
    await postsService.deletePost(post2.id)
    await postsService.deletePost(post3.id)
  })
})
