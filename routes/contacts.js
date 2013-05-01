'use strict';

var contactsModel = require('../models/contacts');

var contacts = {
  list: function (req, res, next) {
    contactsModel.list(function (err, list) {
      req.contact_list = list;
      next(err);
    });
  },

  showform: function (err, res, next) {
    res.render('show-form', {
      title: 'Create new contact'
    });
  },

  validate: function (req, res, next) {
    // server side validation
 

    console.log(req.body);
    var err;

    // if validation fail set err to indicate error

    next(err);
  },

  create: function (req, res, next) {
    // call model.create

    var data = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone
    };

    contactsModel.create(data, function(err, result) {
      console.log(err || result);
      next(err);
    });
  },

  createResponse: function (req, res, next) {
    res.send('contact added');
  }
}

module.exports = contacts;