const mysql = require('mysql2');
const Promise = require('bluebird');
const database = 'greenfield';


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: database

});


  module.exports = connection;
