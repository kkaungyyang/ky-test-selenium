let express = require('express');
let router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  res.render("./landing/index");
})

// About page route.
router.get('/hello', function (req, res) {
  res.send("hello");
})

module.exports = router;