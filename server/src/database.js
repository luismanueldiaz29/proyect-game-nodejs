const mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'admin',
    password : 'admin',
    database : 'ng_games'
});

module.exports = connection;