var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var urlencode = require('urlencode');
var jwt = require('jsonwebtoken');


app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({
  methods: [ 'GET','HEAD','PUT','PATCH','POST','DELETE','OPTIONS' ]
}));

/* no auth required zone */
require('./routers/api-v1/default')(app, express.Router());

app.use(function(req, res, next){
  var token = req.headers['x-token'] || req.cookies.zmgrToken;
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, 'superSecret', function(err, decoded) {
      if (err) {
        // return res.json({ success: false, message: 'Failed to authenticate token.' });
        console.warn('Failed to authenticate token');
        // return res.status(301).redirect('/web/login');
        res.send({status:"_Failure"});
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });
  } else {
    // if there is no token
    // return an error
    // return res.status(301).json({ success: false, message: 'No token provided.' });
    console.warn('No token');
    // return res.status(301).redirect('/web/login');
    res.send({status:"_Failure"});
  }
});

/* auth required zone */
require('./routers/api-v1/merchant')(app, express.Router());
require('./routers/api-v1/coupon')(app, express.Router());

app.listen(3333);
