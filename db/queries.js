const pool = require('./pool')


async function getUserById(id){
    return (await pool.query('SELECT * FROM users WHERE id = $1', [id])).rows[0]
}
async function getUserByUsername(username){
    return (await pool.query('SELECT * FROM users WHERE username = $1', [username])).rows[0]
}

async function createUser(username,password){
    await pool.query('INSERT INTO users (username,password) VALUES ($1,$2)', [username, password])
}


module.exports = {
    getUserById,
    getUserByUsername,
    createUser
}