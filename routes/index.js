var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Browser Title',pagetitle:'Page Title',phone:'0303456',infomail:'contact@yourdomain.com'});
});

module.exports = router;
