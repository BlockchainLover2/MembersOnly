const {Pool} = require('pg')
require('dotenv').config()

const envFile = process.env




module.exports = new Pool({
    connectionString : envFile["connectionString"]
})