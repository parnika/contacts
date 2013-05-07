'use strict';

var home = {
  index: function (req, res, next) {
    //res.send('ok');
    res.render('index', {
      title: 'Home Page'
    });
  }
}

module.exports = home;
