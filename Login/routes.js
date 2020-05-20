const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//login
//curl --data "email=JERRY&=TEST" 'http://localhost:3000/users'
const getUserById = (request, response) => {
  //const getUserById = (request, response) => {
  //  const id = parseInt(request.params.id)
    //const url = (request.params.id);

    //console.log(url);


    //let password = request.query.password;
    //console.log(email);
    //let auth = querystring.parse(url);
    //const email = auth.email;
    //const password = request.params.password;
    //console.log(password);


  //  pool.query('SELECT * FROM users WHERE id = $1 AND password = $2)', [id,password],  (error, results) => {
  //    if (error) {
  //      throw error
  //    }
  //
  //  })
  //}
  const id = (request.params.id)

  pool.query('SELECT * FROM users WHERE email = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send('User Login')
    //response.status('user_login')
  })
}
// curl --data "email=test@gmail.com&password=Test" 'http://localhost:5000/users'
const createUser = (request, response) => {
  const { email, password } = request.body

  pool.query('INSERT INTO users (email, password) VALUES ($1, $2)', [email, password], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send('User added with ID: ${results.rows[0].id} \n')
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { email, password } = request.body

  pool.query(
    'UPDATE users SET email = $1, password = $2 WHERE id = $3',
    [email, password, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}
