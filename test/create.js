'use strict';

/*
var http = require('http');
var https = require('https');


function random(response) {
  console.log("Request handler 'random was called.");
  response.writeHead(200, {"Content-Type": "application/json"});
  var otherArray = ["item1", "item2"];
  var otherObject = { item1: "mainsha", item2: "mani@tim.com" };
  response.write(
    JSON.stringify({ 
      anObject: otherObject, 
      anArray: otherArray, 
      another: "item",
    })
  );
  response.end();
}*/

var querystring = require('querystring');
var http = require('http');
var fs = require('fs');

function PostCode(codestring) {
  // Build the post string from an url.resolveObject(source, relative);ect
  var post_data = querystring.stringify({
     'compilation_level' : 'ADVANCED_OPTIMIZATIONS',
      'output_format': 'json',
      'output_info': 'compiled_code',
        'warning_level' : 'QUIET',
        'js_code' : codestring
  });

  // An object of options to indicate where to post to
  var post_options = {
      host: 'localhost',
      port: '3000',
      path: '/create',
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': post_data.length
      }
  };

  // Set up the request
  var post_req = http.request(post_options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
      console.log('Response: ' + chunk);
      });
  });

  // post the data
  post_req.write(post_data);
  post_req.end();

}


exports.testSomethingElse = function(test){

  fs.readFile('contacts.js', 'utf-8', function (err, data) {
  console.log('data:'+data);
  // Make sure there's data before we post it
  if(data) {
    PostCode(data);
  }
  else {
    console.log("No data to post");
    process.exit(-1);
  }
});
    test.done();
};
