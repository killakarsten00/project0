const Pool = require('pg').Pool
const pool = new Pool({
  user: 'karstennguyen',
  host: 'localhost',
  database: 'vintage',
  password: 'password',
  port: 5432,
})

const getShoes = (request, response) => {
  pool.query('SELECT * FROM shoes ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getShoesById = (request, response) => {
  const size = parseInt(request.params.size)

  pool.query('SELECT * FROM shoes WHERE size = $1', [size], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//curl --data “type=offwhite&size=11” 'http://localhost:3000/shoes'

//curl --data "type=offwhite presto&size=8" 'http://localhost:3000/shoes'

//curl --data "type=Test&size=Test" 'http://localhost:3000/shoes'

// curl --data "email=test@gmail.com&password=Test" 'http://localhost:5000/users'

//email=test@gmail&password=Test
const createShoes = (request, response) => {
  const { type, size } = request.body

  pool.query('INSERT INTO shoes (type, size) VALUES ($1, $2)', [type, size], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`New Shoes were added\n`)
  })
}

//curl -X PUT -d "type=test" -d "size=5" 'http://localhost:3000/shoes/3'

//curl -X PUT -d "type=vans" -d "size=10=" 'http://localhost:3000/shoes/5'


const updateShoes = (request, response) => {
  const id = parseInt(request.params.id)
  const { type, size } = request.body

  pool.query(
    'UPDATE shoes SET type = $1, size = $2 WHERE id = $3',
    [type, size, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Shoes were modified with ID: ${id}\n`)
    }
  )
}

const deleteShoes = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM shoes WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Shoes were deleted with the ID: ${id}`)
  })
}




module.exports = {
  getShoes,
  getShoesById,
  createShoes,
  updateShoes,
  deleteShoes,

  //getShoesById,
}
