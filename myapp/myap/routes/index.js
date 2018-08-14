var express = require('express');
var router = express.Router();
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
	console.log("Get company_list:"+req.body)
	var list=new Array()
	list[0] = {id:1,name:"company_1",desc:"I am a great company!",logo:"../img/jump.gif"};
	list[1] = {id:2,name:"company_a",desc:"I am a great a!",logo:"../img/jump.gif"};
	list[2] = {id:3,name:"company_b",desc:"I am a great b!",logo:"../img/jump.gif"};
	list[3] = {id:4,name:"company_c",desc:"I am a great c!",logo:"../img/jump.gif"};
	res.json({"result":list});
});

/* GET company_list page. */
router.get('/yishi_company_detail', function(req, res) {
	console.log("Get company_detail:"+req.body.id)
	var json_data = {id:req.body.id,name:"company_1",desc:"I am a great company!",logo:"../img/jump.gif"};
	res.json(json_data);
});

/* GET supply_list page. */
router.get('/yishi_supply_list', function(req, res) {
	console.log("Get supply_list:"+req.body.id)
	var list=new Array()
	list[0] = {id:1,product_id:"company_1",product_sort_type:"I am a great company!",product_name:"../img/jump.gif",price_min:"0",price_max:"10",contact_name:"Haha",contact_mobile:"12340"};
	list[1] = {id:2,product_id:"company_a",product_sort_type:"I am a great a!",product_name:"../img/jump.gif",price_min:"0",price_max:"10",contact_name:"Haha",contact_mobile:"12340"};
	list[2] = {id:3,product_id:"company_b",product_sort_type:"I am a great b!",product_name:"../img/jump.gif",price_min:"0",price_max:"10",contact_name:"Haha",contact_mobile:"12340"};
	list[3] = {id:4,product_id:"company_c",product_sort_type:"I am a great c!",product_name:"../img/jump.gif",price_min:"0",price_max:"10",contact_name:"Haha",contact_mobile:"12340"};
	res.json({"sell_buys":list});
});

/* GET demand_list page. */
router.get('/yishi_demand_list', function(req, res) {
	console.log("Get demand_list:"+req.body.id)
	var list=new Array()
	list[0] = {id:1,product_id:"company_1",product_sort_type:"I am a great company!",cover:"../img/jump.gif",price_min:"0",price_max:"10",product_name:"0",product_sort_type:"10",contact_name:"Haha",contact_mobile:"12340"};
	list[1] = {id:2,product_id:"company_a",product_sort_type:"I am a great a!",cover:"../img/jump.gif",price_min:"0",price_max:"10",product_name:"0",product_sort_type:"10",contact_name:"Haha",contact_mobile:"12340"};
	list[2] = {id:3,product_id:"company_b",product_sort_type:"I am a great b!",cover:"../img/jump.gif",price_min:"0",price_max:"10",product_name:"0",product_sort_type:"10",contact_name:"Haha",contact_mobile:"12340"};
	list[3] = {id:4,product_id:"company_c",product_sort_type:"I am a great c!",cover:"../img/jump.gif",price_min:"0",price_max:"10",product_name:"0",product_sort_type:"10",contact_name:"Haha",contact_mobile:"12340"};
	res.json({"sell_buys":list});
});

router.get('/', function(req, res) {
	console.log("index get:"+req.body.data)
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
