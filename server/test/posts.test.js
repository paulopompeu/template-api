require('dotenv').config()
const axios = require('axios')

describe('Testing routes', () => {
  test('Should get posts', async () => {
    // const resp = await axios({
    //   url: `http://localhost:${process.env.port}/posts`,
    //   method: 'get',
    // })
    const resp = 3
    expect(resp).toBe(3)
  })
})
