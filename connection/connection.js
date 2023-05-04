const { configDb } = require("../knexfile")

const cn = require('knex')(configDb);

function getConnection() {
    return cn
}


module.exports = {
    getConnection
}