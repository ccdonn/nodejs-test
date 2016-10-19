var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();


module.exports = function(app, router) {
  app.use('/api/v1/merchant', router);

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

  router.route('/resort')
    .post(function(req, res){
      console.info('POST /api/v1/merchant/resort');
      res.send({status:'_OK'});
    });

  router.route('/category')
    .get(function(req, res){
      console.info('GET /api/v1/merchant/category');
      res.send({status:'_OK'});
    })
    .post(function(req, res){
      console.info('POST /api/v1/merchant/category');
      res.send({status:'_OK'});
    });

  router.route('/:id')
    .get(function(req, res){
      console.info('id='+req.params.id);
      console.info('GET /api/v1/merchant/:id');
      res.send({status:'_OK'});
    });

}
