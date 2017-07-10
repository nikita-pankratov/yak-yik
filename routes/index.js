var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/createZone', function(req, res, next) {
    res.render('createZone', null);
});

router.get('/createComment', function(req, res, next) {
    res.render('createComment', null);
});


module.exports = router;
