const {Client} = require('pg')
const client = new Client({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})

execute()

async function execute() {
    await client.connect()
    console.log("Connected")
    const {rows} = await client.query('SELECT * FROM users ORDER BY id ASC')
    console.table(rows)

    await client.end()
    console.log("Client Disconnected")


}
