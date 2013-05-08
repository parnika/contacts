'use strict';

var request = require('request');

/* server = 'http://localhost:4120/v1/orders/';

var fetch = {
  init: function (req, cb) {
    var options = {
      method: 'get',
      url: server + req.id
    };
    request(options, function (err, resp, body) {
      cb(err, body);
    });
  }
};

module.exports = fetch;

if (require.main === module) {
  (function () {
    var req = {
      id: process.argv[2] || 1
    };
    fetch.init(req, function (err, res) {
      console.log(err || res);
    });
  })();
}*/
module.exports = create;
/*
server = 'http://localhost:3000/new/';
var fetch = {
  init: function (req, cb) {
    var options = {
      method: 'get',
      url: server + req.id
    };console.log('here');
    request(options, function (err, resp) {
      cb(err, body);
    });
  }
};

console.log('in test file');
if (require.main === module) {
  (function () {
    var newcontact = {
      name: 'neha',
      email: 'neha@gmail.com',
      phone: '7875363547'
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
}*/
server = 'http://localhost:3000/new/';
var fetch = {
  init: function (req, cb) {
    var options = {
      method: 'get',
      url: server + req.id
    };console.log('here');
  //request(options, function (err, resp) {
   // cb(err, body);
  //});
  }
};




