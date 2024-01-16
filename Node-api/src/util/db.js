// connect to database

const mysql = require('mysql');
const util = require("util")

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'preycode_g1'
})

db.query = util.promisify(db.query).bind(db) // util.promisify

module.exports = db; // export module