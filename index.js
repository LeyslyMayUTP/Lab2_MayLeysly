require('dotenv').config()
const express = require("express")
const bodyParser = require('body-parser')
const courses = require("./controller/courses.controller")
const users = require("./controller/users.controller")
const app = express()
const { validate } = require("./midlewares/middleware")
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
const login = require("./controller/login.controller")
const register = require("./controller/register.controller")
const dashboard = require("./controller/dashboard.controller")



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/v1/courses", courses)
app.use("/v1/users", users )
app.use("/login", login)
app.use("/register", register)
app.use("/dashboard", dashboard)
// http: GET,  DELETE, POST, PUT, PATCH
// HTTP STATUS: 200, 201, 404, 401, 500


//SETEAMOS EL MOTOR DE PLANTILLAS 
app.set('view engine', 'ejs')
//SETEAMOS LA CARPETA PUBLIC PARA ARCHIVOS ESTATICOS 
app. use(express.static('public'))

app.use(cookieParser())

//PARA PROCESAR DATOS ENVIADOS DESDE FORMS 
app.use(express.urlencoded({extended:true}))
app.use(express.json())
  


app.listen(process.env.PORT, () => {
    console.log(`Server its running in the port ${process.env.PORT}`)
})

