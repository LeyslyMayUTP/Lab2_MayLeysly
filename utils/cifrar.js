const bcrypt = require('bcrypt');


function encriptPassword(password, rondasCifrado = 10) {
    const promise = new Promise((resolve, reject) => {
        bcrypt.hash(password, rondasCifrado, (error, hash) => {
            if (error) reject("Its imposible to cipher the password")
            else {
                resolve(hash)
            }
        });
    })
    return promise
}


module.exports = {
    encriptPassword
}