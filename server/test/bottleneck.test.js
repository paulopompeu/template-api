const axios = require('axios')
require('dotenv').config()

describe('Bottleneck test', () => {
  test('Some calls', async (done) => {
    const response = async (req, res) =>
      axios({
        url: `http://localhost:${process.env.port}/healthcheck`,
        method: 'get',
      })

    const sourceIds = []

    const count = 4
    for (let i = 0; i < count; i = i + 1) {
      sourceIds.push({
        id: i,
      })
    }
    const allThePromises = sourceIds.map((item) => {
      return response()
    })

    let result 
    try {
      await Promise.all(allThePromises)
      result = 0
    } catch (err) {
      result = 1
    }

    expect(result).toBe(0)
    done()
  })

  test('Too many calls', async (done) => {
    const response = async (req, res) =>
      axios({
        url: `http://localhost:${process.env.port}/healthcheck`,
        method: 'get',
      })
    const sourceIds = []

    const count = 50
    for (let i = 0; i < count; i = i + 1) {
      sourceIds.push({
        id: i,
      })
    }
    const allThePromises = sourceIds.map((item) => {
      return response()
    })

    let result 
    try {
      await Promise.all(allThePromises)
      result = 0
    } catch (err) {
      result = err.response.status
    }

    expect(result).toBe(429)

    done()
  })
})
