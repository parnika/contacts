'use strict';

 var home = require('./home');
 var common = require('./common');
 var contacts = require('./contacts');
 

module.exports = function(app) {
  app.get('/', contacts.list,  home.index);

  app.get('/new', contacts.showform);

  app.post('/create', contacts.validate, contacts.create, contacts.createResponse, common.error);

  app.get('/list', contacts.details);
 
};









