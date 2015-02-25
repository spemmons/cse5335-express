var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('request=' + Object.keys(req).sort().join(', '));
  console.log('originalurl=' + req.originalUrl);
  console.log('baseurl=' + req.baseUrl);
  console.log('query=');
  for (var key in req.query)
    console.log('- ' + key + '=' + req.query[key])
  res.send('respond with a resource');
});

module.exports = router;
