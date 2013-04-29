'use strict';

 var home = require('./home');
 var contacts = require('./contacts');

module.exports = function(app) {
  app.get('/', contacts.list,  home.index);

}
