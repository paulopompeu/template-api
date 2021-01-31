const axios = require('axios')

describe('Testing routes', () => {
    test('Should get posts', async () => {
        const resp = await axios({
            url: 'http://localhost:5000/posts',
            method: 'get'
        })
        expect(resp.data).toHaveLength(3)
    })

})
