const db = require('./queries')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Phoenix Vintage' })
})

app.get('/shoes', db.getShoes)
app.get('/shoes/:size', db.getShoesById)

app.post('/shoes', db.createShoes)
app.put('/shoes/:id', db.updateShoes)
app.delete('/shoes/:id', db.deleteShoes)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})




/*
CREATE TABLE SHOES (
	shoes_id SERIAL PRIMARY KEY,
  brand VARCHAR(30),
  type VARCHAR(30),
	size INT,
);

CREATE TABLE CLOTHES (
	clothes_id SERIAL PRIMARY KEY,
	brand VARCHAR(30),
	size VARCHAR(30)

);
*/

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
