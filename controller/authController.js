const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const pool = require ('../database/db')
const {promisify} = require ('util')
const { error } = require('console')

//procedimiento para registrarnos 
exports.register = async (req, res) =>{

    try{
        const name = req.body.name
        const usuario = req.body.usuario
        const password = req.body.password
        const confirm_password = req.body.confirm_password
        let passHash = await bcryptjs.hash(password, 8)
        //establecemos la conexion a la base de datos 
        pool.query('INSERT INTO "user" (name, usuario, password, confirm_password) VALUES ($1, $2, $3, $4)', [name, usuario, passHash, passHash], (error, results) =>{
            if(error){console.log(error)}
            res.redirect('/dashboard')
        })
    }catch (error) {
        console.log(error)
    }
}

exports.login = async (req, res) => {
    try {
        const usuario = req.body.usuario
        const pass = req.body.pass

        if(!usuario || !pass){
            res.render('login', {
                alert:true,
                alertTitle: "Advertencia",
                alertMessage: "Ingrese un Usuario y una Password",
                alertIcon: 'info', 
                showConfirmButton: true,
                timer: false,
                ruta: '/'
            })
        }else{
            // Consulta SQL para buscar al usuario en la base de datos
            const query = 'SELECT * FROM "user" WHERE usuario = $1';
            const values = [usuario];
            const { rows } =  await pool.query(query, values);

            if(rows.length == 0 || ! ( await bcryptjs.compare(pass, rows[0].password))){
                res.render('login', {
                    alert: true,
                    alertTitle: "Error",
                    alertMessage: "Usuario y Password incorrectos",
                    alertIcon: 'error', 
                    showConfirmButton: true,
                    timer: false,
                    ruta: '/'
                })
            }else{
                //inicio de sesion ok 
                const id = rows[0].id
                const token = jwt.sign({id:id}, process.env.JWT_SECRETO)
                console.log("TOKEN: " + token + " para el usuario: " + usuario)

                const cookiesOptions = {
                    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRA * 24 * 60 * 60 * 1000),
                    httpOnly: true
                }
                res.cookie('jwt', token, cookiesOptions)
                res.render('login', {
                    alert: true,
                    alertTitle: "CONEXION EXITOSA",
                    alertMessage: "¡LOGIN CORRECTO!",
                    alertIcon: 'success', 
                    showConfirmButton: false,
                    timer: 800,
                    ruta: ''
                })
            }
        }

    } catch (error) {
        console.log(error)
    }
}


  








