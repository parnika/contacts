'use strict';

var db = require('./db');

var contacts = {
  create: function(data, cb) {
    // insert data into db

    cb (err || null, result);    
  },

  list: function(cb) {
    // fetch contacts
    // return via cb
    // cb (err, results);
    cb(null, ['a', 'b']);
  }

}

module.exports = contacts;