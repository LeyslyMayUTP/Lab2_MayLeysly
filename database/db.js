const { Pool } = require('pg')

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
})

pool.connect((err, client) => {
  if (err) {
    console.error('Error de conexión', err.stack)
  } else {
    console.log('Conectado a la base de datos')
  }
})

module.exports = pool
