var express = require('express');
var app = express();

require('./routers/api-v1/merchant')(app, express.Router());
require('./routers/api-v1/coupon')(app, express.Router());

var db = require('./config');

app.listen(3333);

app.get('/', function(req, res){
  console.info('welcome '+ db.profile.env);
  console.info('DB: port='+db.profile.port);
  res.end();
});
