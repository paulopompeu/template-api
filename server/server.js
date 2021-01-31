const express = require('express')
const app = express()

app.use('/', require('./routes/postsRoutes'))

const port = process.env.port || 5000
app.listen(5000, () => console.log(`Listening on 0.0.0.0:${port}`))