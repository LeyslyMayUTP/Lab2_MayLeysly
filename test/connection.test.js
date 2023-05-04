const { getConnection } = require("../connection/connection")



let knex = getConnection()

knex.select('*').from('user')
    .then(rows => {
        console.log(rows);
    })
    .catch(err => {
        console.error(err);
    });