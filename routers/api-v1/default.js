module.exports = function(app, router) {
  app.use('/api/v1', router);

  var db = require('./../../config');

  router.get('/', function(req, res){
    console.info('welcome '+ db.profile.env);
    console.info('DB: port='+db.profile.port);
    res.end();
  });
}
