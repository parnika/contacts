'use strict';

var db = require('./db');

var contacts = {
  create: function (data, cb) {
    var required = ['name', 'email', 'phone'];
    var i = 0;
    for (i; i < required.length; i++) {
      if (!data[required[i]]) {
        return cb(new Error('missing: ' + required[i]));
      }
    }
    var query = 'INSERT INTO contacts SET ?';
    db.query(query, data, cb);
  },

  get: function (id, cb) {
    var query = "SELECT * FROM contacts where id=?";
    db.query(query, [id], cb);
  },

  by_email: function(email, cb) {
    var query = "SELECT * FROM contacts where email=?";
    db.query(query, [email], cb);
  },

  by_phone: function(phone, cb) {
    var query = "SELECT * FROM contacts where phone=?";
    db.query(query, [phone], cb);
  },

  by_name: function(name,cb) {
    var query = "SELECT * FROM contacts where name=?";
    db.query(query,[name],cb);
  },

  list: function (cb) {
    var query = "SELECT * FROM contacts";
    db.query(query, cb);
  },

  getNames: function (cb) {
    var query = "SELECT * FROM contacts";
    db.query(query, cb);
  },

  delByName: function(name,cb) {
    var query = "DELETE FROM contacts where name=?";
    db.query(query,[name],cb);
  }


}

module.exports = contacts;

if (require.main === module) {
  (function () {
    var newcontact = {
      name: 'Parnika Singla',
      email: 'parnikasingla@gmail.com',
      phone: '8826724555'
    };
    contacts.create(newcontact, function (err, res) {
      if (!err && res) {
        var id = res.insertId;
        contacts.get(id, function (err, contact) {
          console.log(err || contact);
          contacts.list(function (err, result) {
            console.log(err || result);
            process.exit(1);
          });          
        });
      } else { 
        console.log(err || new Error('no response received'));
      }
    })
  })();
}