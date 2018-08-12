//登录接口
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {//处理get请求
    res.json({code: "000000"});
});

router.post('/', function(req, res) {//处理post请求
    res.json({code: "000000"});
});

module.exports = router;//对外提供router
