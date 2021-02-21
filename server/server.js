require('dotenv').config()

const express = require('express')
const cors = require('cors')
const compression = require('compression')
const { bottleneckPolicy} = require('./infra/bottleneck')

const app = express()
app.use(cors())
app.use(compression())
app.use(bottleneckPolicy)

app.get('/healthcheck', async (req, res) => {
    res.end()
})

app.use('/', require('./routes/postsRoutes'))

const port = process.env.port || 5000
app.listen(port, () => console.log(`Listening on 0.0.0.0:${port}`))