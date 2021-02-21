const express = require('express')
const router = express.Router()
const postsService = require('../services/postsService')


router.get('/posts', async (req, res) => {
    const posts = await postsService.getPosts()
    res.json(posts)
})

module.exports = router