const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'a1234567',
        database : 'portal_noticias'
    })
}
