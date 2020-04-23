
/*  =  Dependancies
=============================================== */
require ("dotenv").config();
const mysql = require("mysql");
const util = require("util");


/*  =  Setup Connection
=============================================== */
const connection = mysql.createConnection({
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database:process.env.DB_NAME
});

connection.connect(function(err){
    if(err){return console.error("Error Connecting:"+err.stack);}
    console.log("Connected as id "+ connection.threadId);
});

connection.query = util.promisify(connection.query);


module.exports = connection;