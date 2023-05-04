const { getConnection } = require("../connection/connection")



async function save(body){
    let knex = getConnection()
    return await knex.insert(body).from('user').returning('uuid')
}

module.exports={
    save
}