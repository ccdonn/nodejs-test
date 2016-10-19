module.exports = function(app, router) {
  app.use('/api/v1/coupon', router);

  router.get('/', function(req, res){
    console.info('/api/v1/coupon');
    res.end();
  });
}
