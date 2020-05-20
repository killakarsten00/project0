const {Client} = require('pg')
const express = require ("express")
const app = express();
app.use(express.json())

const client = new Client({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})

//app.get("/home", (req,res) => res.sendFile('${__dirname}/index.html'))

app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
  //__dirname : It will resolve to your project folder.
});



app.post('/test', async (req, res) => {
  let result = {}

  try{


    const reqJson = req.body;
    await createTodo(reqJson.todo );
    result.success = true;

  }
  catch(e){
    result.sucess = false;
  }
  finally{
    res.setHeader("content-type", "application/json")
    res.send(JSON.stringify(result))
  }
})

async function createTodo(todoText){

  try{
    await client.query('INSERT INTO users (name, email) VALUES ($1)', [todoText]);
    return true
  }
    catch(e){
      return false;
}
}

async function deleteToDo(id) {
  try{

  await client.query('DELETE FROM users where id = $1', [id]);
  return true
}
  catch(e){
    return false;
}
}

app.delete('/test', async (req, res) => {
  let result = {}

  try{


    const reqJson = req.body;
    await DeleteTodo(reqJson.id)
    result.success = true;

  }
  catch(e){
    result.sucess = false;
  }
  finally{
    res.setHeader("content-type", "application/json")
    res.send(JSON.stringify(result ))
  }
})

app.listen(8080, () => console.log('Server is listening'))

start()



async function start() {
 await connect();
 console.log(todos)

  const successCreate = await createTodo("Go to trader joes")
  console.log('Creating was ${successCreate}')

  const sucessDelete = await deleteToDo(1)
  console.log('Deleting was ${successDelete}')

}

app.get('/test', async (req, res) => {
  const rows = await readTodos();

  res.setHeader("content-type", "application/json")
  res.send(JSON.stringify(rows))
})

async function readTodos() {
  try {
    const results = await client.query('SELECT id,name FROM users ORDER BY id ASC');
    return results.rows;
  }
  catch(e){
    return [];
  }
}

//app.get('/users/:id', db.getUserById)
/*
app.get('/users/:id', async (request, response) => {
  //const url = (request.params.email)
  //console.log(url);
  //let auth = querystring.parse(url);
  //console.log(auth);
  //const id = parseInt(request.params.id)
  //const id = auth.email;
  //const pass = auth.password;
  let result = {}
  //const id = parseInt(request.params.id)
  try{
  const reqJson = req.body;
  await login(reqJson.id);
  result.success = true;
  }
  catch(e){
  result.sucess = false;
  }
  finally{
    res.setHeader("content-type", "application/json")
    res.send(JSON.stringify(result))
  }

  //res.setHeader("content-type", "application/json")
  //res.send(JSON.stringify(rows))
  //console.log(url);
  //response.send(rows)
})

async function login(id) {

  try {

    await pool.query('SELECT * FROM users WHERE id = $1 )', [id]);
    //return results.rows
    console.log('success');

    //return results.rows;
  }
  catch(e){
    return [];
  }
}

*/
