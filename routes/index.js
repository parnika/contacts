'use strict';

 var home = require('./home');
 var common = require('./common');
 var contacts = require('./contacts');
 

module.exports = function(app) {
  app.get('/', contacts.list,  home.index);

  app.get('/new', contacts.showform);

  app.post('/create', contacts.validate, contacts.create, contacts.createResponse, common.error);

  app.get('/list', contacts.details);

  app.post('/deleted',contacts.deleteRecord);

  app.get('/delete', contacts.showDeleteForm);
   
  app.post('/search',contacts.searchRecord);
  app.get('/search',contacts.showSearchForm);
   
 
};









