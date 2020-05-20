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

try {

  await client.connect()

  await client.query("BEGIN")
  await client.query('INSERT INTO users (name, email) VALUES ($1, $2)', ['Carti', 'Wave@SoundCloud.com'])
  console.log("Inserted a new row")
  await client.query('COMMIT')
}

catch (ex) {
  console.log('Failed')
}
finally {
  await client.end()
  console.log("cleaned")
}
}
/*
