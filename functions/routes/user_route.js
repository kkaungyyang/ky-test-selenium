var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  res.send('User home page');
})

// About page route.
router.get('/about', function (req, res) {
  res.send('User about page');
})

module.exports = router;