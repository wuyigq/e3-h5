//用户数据操作
var login = require("./login");
var regist = require("./regist");
var company = require("./company");
var supply = require("./supply");
var demand = require("./demand");

//调用登录方法
var loginDo = function(username,password,callback){
	login.login(username,password,function(res){
		callback(res);
	});
}

//调用注册方法
var registDo = function(username,password,callback){
	regist.regist(username,password,function(res){
		callback(res);
	});
}

//调用company方法
var companyDo = function(type, id, callback){
	company.company(type,id,function(res){
		callback(res);
	});
}

//调用supply方法
var supplyDo = function(type, id, callback){
	supply.supply(type,id,function(res){
		callback(res);
	});
}

//调用demand方法
var demandDo = function(type, id, callback){
	demand.demand(type,id,function(res){
		callback(res);
	});
}

exports.login = loginDo;
exports.regist = registDo;
exports.company = companyDo;
exports.supply = supplyDo;
exports.demand = demandDo;
