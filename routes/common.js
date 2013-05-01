'use strict';

var common = {
  error: function(err, req, res, next) {
    // show a better error page
    res.locals.err = err;
    res.render('error');
  }
};

module.exports = common;
