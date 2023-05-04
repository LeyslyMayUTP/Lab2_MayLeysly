const express = require('express')
const routes = express.Router()

const authController = require('../controller/authController')

routes.get('/', (req, res) =>{
    res.render('register')
})


routes.post('/', authController.register)


module.exports = routes