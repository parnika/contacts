'use strict';

var home = {
  index: function (req, res, next) {
    res.send('ok');
  }
}

module.exports = home;
