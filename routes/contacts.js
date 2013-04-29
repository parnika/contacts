'use strict';

var contactsModel = require('../models/contacts');

var contacts = {
  list: function (req, res, next) {
    contactsModel.list(function(err, list) {
      req.contact_list = list;
      next(err);
    });
  }
}

module.exports = contacts;