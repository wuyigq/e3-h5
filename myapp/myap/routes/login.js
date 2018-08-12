//登录接口
var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao');//请求我们的数据处理包

router.get('/', function(req, res, callback) {//处理get请求
	console.log("login get:"+req.body.user_name)
    userDao.login(req.query.username,req.query.password,function(result){//回调函数
    	res.json({status: 200, result});
    });
});

router.post('/', function(req, res) {
	console.log("login post:"+req.body.user_name)
    userDao.login(req.body.user_name,req.body.pwd,function(result){
    	res.json(result);
    });
});

module.exports = router;//对外提供router
