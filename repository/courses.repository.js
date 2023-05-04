const { getConnection } = require("../connection/connection")



function save(data) {

}

 function get() {
    let knex = getConnection()
    return knex.select("*").from('user')
}

function getbyUuid(uuid) {

}

function update(uuid, data) {

}

function deleteByUuid(uuid) {

}


module.exports = {
    save,
    get,
    update,
    deleteByUuid,
    getbyUuid
}
