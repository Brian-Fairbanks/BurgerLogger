const mysql = require("mysql");
require ("dotenv").config();

connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user: DB_USER,

})