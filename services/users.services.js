const { encriptPassword } = require("../utils/cifrar")
const { v4 } = require('uuid');
const {save} = require("../repository/users.repository")


async function saveUsers(body) {
    try {
        let password = await encriptPassword(body.password)
        body.password = password
        body.uuid = v4()
        let dataCreated = await save(body)
        return dataCreated
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    saveUsers
} 