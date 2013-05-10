'use strict';

var querystring = require('querystring');
var http = require('http');
var fs = require('fs');


 var post_data = querystring.stringify({
    name: 'nikky'
    });

  // An object of options to indicate where to post to
  var post_options = {
      host: 'localhost',
      port: '3000',
      path: '/search',
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': post_data.length
      }
  };
function postJSON  (post_options, onResult)
      
  {
    var post_req = http.request(post_options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
      console.log('Response: ' + chunk);
      });
  });

  // post the data
  post_req.write(post_data);
  post_req.end();

    };

    exports.testSomethingElse = function(test){
  postJSON(post_options, function(post_data){
    
  });
    test.ok(true, "this assertion should fail");
    test.done();
};

