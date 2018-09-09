var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao');//请求我们的数据处理包
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })//url-encoded解析器

/* GET sessionkey page. */
router.get('/sessionkey', function(req, res) {
	console.log("index get:"+req.body)
	var json_data = {"session_key":"amit"};
	res.json(json_data);
});

/* GET company_list page. */
router.get('/yishi_company_list', function(req, res) {
	console.log("Get company_list:"+req.query)
    userDao.company(0, 0, function(result){
    	res.json(result);
    });
});

/* GET company_list page. */
router.get('/yishi_company_detail', function(req, res) {
	console.log("Get company_detail:"+req.query.id)
    userDao.company(1, req.query.id, function(result){
    	res.json(result);
    });
	// var json_data = {id:req.query.id,name:"华为",desc:'',logo:"", type:"私企", size:"15000人", found_date:"1987年", address:"", business:""};
	// res.json(json_data);
});

/* GET supply_list page. */
router.get('/yishi_supply_list', function(req, res) {
	console.log("Get supply_list:")
    userDao.supply(0, 0, function(result){
    	res.json(result);
    });
});

/* GET supply_list page. */
router.get('/yishi_supply_detail', function(req, res) {
	console.log("Get supply_detail:"+req.query.id)
    userDao.supply(1, req.query.id, function(result){
    	res.json(result);
    });
});

/* GET demand_list page. */
router.get('/yishi_demand_list', function(req, res) {
	console.log("Get demand_list:")
    userDao.demand(0, 0, function(result){
    	res.json(result);
    });
});

/* GET demand_list page. */
router.get('/yishi_demand_detail', function(req, res) {
	console.log("Get demand_detail:"+req.query.id)
    userDao.demand(1, req.query.id, function(result){
    	res.json(result);
    });
});

router.get('/', function(req, res) {
	console.log("index get:"+req.query.data)
	var json_data = {"name":"amita","pass":"12345"};
	res.json(json_data);
});

/* POST home page. */
router.post('/', urlencodedParser, function(req, res) {
	console.log("index post:"+req.body.sign)
	console.log("index post:"+req.body.app_key)
	var json_data = {"name":"amita","pass":"12345"};
	res.json(json_data);
});

module.exports = router;
