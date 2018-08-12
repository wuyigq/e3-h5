//登录
var connection = require("../config/config");//请求我们的数据库连接

var login = function(username,password,callback){
    var data = {};
	connection.getConnection.query('select * from user where uname = "'+username+'";',function(error,rows,fields){//sql查询
        if (error != null){
            console.log(error)
            data.type = "fail";
            data.message = "数据库异常！";
            callback(data);
    	} else if(rows.length == 0){
            data.type = "fail";
            data.message = "用户名不存在！";
    		callback(data);
    	}else{
    		if(rows[0].pwd == password){
                data.code = "000000";
                data.website_name = "义饰网";
                data.website_logo = "";
                data.website_grade = "";
                data.website_id = "1";
    			data.type = "success";
                data.message = "登录成功！";
                callback(data);
    		}else{
    			data.type = "fail";
                data.message = "密码错误！";
                callback(data);
    		}
    	}
	});
}
 
exports.login = login;//对外提供我们的login方法。
