var cors = require('cors');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var urlencode = require('urlencode');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();


module.exports = function(app, router) {
  // var webRoutes = express.Router();
  app.use('/api/v1/merchant', router);
  router.use(cookieParser());
  router.use(bodyParser.urlencoded({extended:true}));
  router.use(bodyParser.json());

  router.use(cors({
    methods: [ 'GET','HEAD','PUT','PATCH','POST','DELETE','OPTIONS' ]
  }));
  // router.use(cors());

  router.route('')
    .get(function(req, res){
      console.info('GET /api/v1/merchant');
      res.send({status:'_OK'});
    })
    .post(function(req, res){
      console.info('q='+req.query.q);
      console.info('st='+req.body.st);
      console.info('h='+req.headers['x-token']);
      console.info('POST /api/v1/merchant');
      res.send({status:'_OK'});
    })
    .put(multipartMiddleware, function(req,res){
      console.info('q='+req.query.q);
      console.info('st='+req.body.st);
      console.info('h='+req.headers['x-token']);
      console.info('PUT /api/v1/merchant');
      res.send({status:'_OK'});
    })
    .patch(function(req, res){
      console.info('PATCH /api/v1/merchant');
      res.send({status:'_OK'});
    })
    .delete(function(req, res){
      console.info('DELETE /api/v1/merchant');
      res.send({status:'_OK'});
    });
    // .options(cors(), function(req, res){});
}
