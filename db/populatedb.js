const { Client } = require("pg");

const SQL =
    "CREATE TABLE IF NOT EXISTS users(" +
    "id INTEGER PRIMARY KEY GENERATED always AS IDENTITY," +
    "email varchar(255) unique," +
    "firstname varchar(255)," +
    "lastname varchar(255)," +
    "password varchar(255)" +
    ");" +
    "CREATE TABLE IF NOT EXISTS posts(" +
    "id INTEGER PRIMARY KEY GENERATED always AS IDENTITY," +
    "post varchar(255)," +
    "title varchar(255)," +
    "owner INTEGER references users(id)" +
    ")"

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: "postgresql://postgres:123@localhost:5432/top_users",
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();
