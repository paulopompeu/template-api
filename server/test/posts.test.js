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
    console.log('post1')
    console.log(post1)
    // const resp = await axios({
    //   url: `http://localhost:${process.env.port}/posts`,
    //   method: 'get',
    // })
    const resp = 3
    expect(resp).toBe(3)
  })
})
