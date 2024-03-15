const mysql = require('mysql');

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Akash123",
    database:"recipe_app",
});



module.exports = connection;