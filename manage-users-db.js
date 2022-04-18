const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: 'elara2334',
    host: 'localhost',
    port: 5432,
    database: 'manage_users'
})


module.exports = pool

