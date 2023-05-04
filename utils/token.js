const jwt = require("jsonwebtoken")

function generateToken(payload) {
    let token = jwt.sign({
        data: payload
    }, "shhhh", { expiresIn: 60 * 60 })
    return token
}


module.exports = {
    generateToken
}