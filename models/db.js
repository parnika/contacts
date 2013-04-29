'use strict';

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sql',
});

connection.connect();

connection.ping(function(err, res) {
  if (!err) {
    console.log('Mysql connected');
  } else {
    console.log(err);
  }
});

module.exports = connection;