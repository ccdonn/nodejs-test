var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var urlencode = require('urlencode');

var db = require('./config');

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({
  methods: [ 'GET','HEAD','PUT','PATCH','POST','DELETE','OPTIONS' ]
}));

require('./routers/api-v1/merchant')(app, express.Router());
require('./routers/api-v1/coupon')(app, express.Router());

app.listen(3333);

app.get('/', function(req, res){
  console.info('welcome '+ db.profile.env);
  console.info('DB: port='+db.profile.port);
  res.end();
});
