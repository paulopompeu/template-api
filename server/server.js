const express = require('express')
const cors = require('cors')
const compression = require('compression')

const app = express()
app.use(cors())
app.use(compression())

app.use('/', require('./routes/postsRoutes'))

const port = process.env.port || 5000
app.listen(5000, () => console.log(`Listening on 0.0.0.0:${port}`))