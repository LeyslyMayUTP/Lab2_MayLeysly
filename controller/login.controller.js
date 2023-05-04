const express = require('express')
const routes = express.Router()

const authController = require('../controller/authController')

routes.get('/', (req, res) =>{
    res.render('login', {alert:false})
})

routes.post('/', authController.login)

module.exports = routes