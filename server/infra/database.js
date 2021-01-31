const pgp = require('pg-promise')()
const db = pgp({
    user: 'postgres',
    password: 'docker',
    host: 'localhost',
    port: 5434,
    database: 'blog'
})

module.exports = db