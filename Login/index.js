/*
const express = require('express')
const bodyParser = require('body-parser')
//const app = express()
//const port = 3000
const {Client} = require('pg')
const client = new Client({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})

//start()
//async function start(){
//  await connect();
//}

client.connect()
.then(() => console.log("Connect Successfully"))
.then(() => client.query('INSERT INTO users (name, email) VALUES ($1, $2)', ['KARL', 'TEST@GMAIL.COM']))
.then(() => client.query('SELECT * FROM users ORDER BY id ASC'))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end())




*/


const db = require('./routes')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Login' })
})


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Login' })
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
