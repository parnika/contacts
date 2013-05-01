var request = require('request'); 


exports.value = function(req, res)
{
var para=req.body.user.name;
       var options = {
               
               uri: 'http://download.finance.yahoo.com/d/quotes.csv?s='+para+'&f=sl1d1t1c1ohgv&e=.csv',
               //uri: '10.0.10.177',
               method: 'GET'
       };
       request(options, function(err, resp, body) {
               res.send(err || body);
       });
}
