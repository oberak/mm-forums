var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/add', function(req, res, next) {
  res.render('samples/add', { title: 'Sample add' });
});

/* GET users listing. */
router.get('/view', function(req, res, next) {
  res.render('samples/view', { title: 'Sample view' });
});

/* GET users listing. */
router.get('/list', function(req, res, next) {
  res.render('samples/list', { title: 'Sample list' });
});

module.exports = router;
