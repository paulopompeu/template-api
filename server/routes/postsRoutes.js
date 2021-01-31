const express = require('express')
const router = express.Router()

router.get('/posts', async (req, res) => {
    res.end()
})
router.get('/posts/:id', async (req, res) => {
    res.end()
})
router.post('/posts', async (req, res) => {
    res.end()
})
router.put('/posts/:id', async (req, res) => {
    res.end()
})
router.delete('/posts/:id', async (req, res) => {
    res.end()
})

module.exports = router