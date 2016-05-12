var express = require('express')
,   timeLog = require('../toolbox/timelog')
,   router  = express.Router();

router.use(timeLog);
router.get('/', function(req, res) {
  res.render('homepage', {title: "VIM HOME PAGE"});
})

router.get('/pages/home', function(req, res) {
  res.render('homedrtv');
})

router.get('/template/header', function(req, res) {
  res.render('headerdrtv');
})

module.exports = router;
