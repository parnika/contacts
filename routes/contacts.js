'use strict';

var contactsModel = require('../models/contacts');

var contacts = {

  list: function(req, res, next) {
    contactsModel.list(function(err, list) {
      res.locals.contacts = list;
      next(err);
    });
  },

  listResponse: function (req, res, next) {
    res.locals.title = 'Contact List';
    res.render('list');
  },

  deleteRecord: function(req, res, next) {
    var name = req.body.name;
    console.log('name' + name);
    contactsModel.delByName(name, function(err, list) {
      res.render('deleted', {
        title: 'deleted record',
        affectedrow: list.affectedRows
      });
    });
  },



  showDeleteForm: function(req, res, next) {
    res.render('deletion', {
      title: 'delete record'
    });
  },

  showSearchForm: function(req, res, next) {
    res.render('searched', {
      title: 'searching'
    });
  },

  searchRecord: function(req, res, next) {
    var name = req.body.name;
    //email: req.body.email;
    //phone: req.body.phone;
    console.log('searched name:' + name);
    contactsModel.by_name(name, function(err, list) {
      //console.log(JSON.stringify(list, null, 2));
      console.log(JSON.stringify(list));
      res.render('searchh', {
        title: 'searched record',
        det: list
      });
    });
  },

  showform: function(err, res, next) {
    res.render('show-form', {
      title: 'Create new contact'
    });
  },

  validate: function(req, res, next) {
    // server side validation

    var data = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone
    };
    console.log('in validate', data);
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var filter1 = /^[a-zA-Z0-9]*$/;
    var filter2 = /^[\d]*$/;

    if ((filter.test(data.email)) && (filter1.test(data.name)) && (filter2.test(data.phone))) {
      next();
    } else {
      var str;
      if (!filter.test(data.email)) str = 'enter valid email id';
      if (!filter1.test(data.name)) str = 'enter valid name';
      if (!filter2.test(data.phone)) str = 'enter valid phone number';
      next(new Error(str));
    }
  },
  create: function(req, res, next) {
    // call model.create

    var data = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone
    };
    contactsModel.create(data, function(err, result) {
      next(err);
    });
  },

  createResponse: function(req, res, next) {
    res.redirect('/');
  },


}

module.exports = contacts;