const {Pool} = require('pg')
require('dotenv').config()

const envFile = process.env




module.exports = new Pool({
    host:envFile.host,
    user:envFile.user,
    database:envFile.database,
    password:envFile.password,
    port:envFile.databasePort
})