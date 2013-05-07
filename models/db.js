'use strict';

var config = require('../config');

var mysql = require('mysql');
var connection = mysql.createConnection(config.db);

connection.connect();

connection.ping(function(err, res) {
  if (!err) {
    console.log('Mysql connected');
  } else {
    console.log(err);
  }
});

module.exports = connection;
