var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log("user get:"+req.body.data)
	res.send('respond with a resource');
});

/* GET users listing. */
router.post('/', function(req, res, next) {
	console.log("user post:"+req.body.data)
	res.send('respond with a resource');
});

module.exports = router;
