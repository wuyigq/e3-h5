 //注册接口
var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao');

router.get('/', function(req, res,callback) {
	console.log("regist post:"+req.body.data)
    userDao.regist(req.query.account,req.query.password,function(result){
    	res.json({status: 200, result});
    });
});

router.post('/', function(req, res,callback) {
	console.log("regist post:"+req.body.account)
	console.log("regist post:"+req.body.pwd)
	console.log("regist post:"+req.body.website_id)
    userDao.regist(req.body.account,req.body.pwd,function(result){
    	res.json(result);
    });
});

module.exports = router;
