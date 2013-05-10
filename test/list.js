'use strict';


var http = require('http');
var https = require('https');


  var options = {
        host: 'localhost',
        port: 3000,
        path: '/list',
        method: 'GET',
        headers: {
       'Content-Type': 'application/json'
     }
       };
 function getJSON  (options, onResult)
      
  {
 var req = http.request(options, function(res)  {

        var output = '';
        console.log(options.host + ':' + res.statusCode);
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function() {
            var obj = JSON.parse(output);
            onResult(obj);
        });
    });

    req.on('error', function(err) {
        //res.send('error: ' + err.message);
    });

    req.end();

};

exports.testSomethingElse = function(test){
  getJSON(options, function(data){
    console.log(data);
  });
    test.ok(true, "this assertion should fail");
    test.done();
};



