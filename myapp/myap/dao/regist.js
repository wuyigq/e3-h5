//注册
var connection = require("../config/config");

var regist = function(username,password,callback){
	var data = {};
    console.log("--username----"+username);
    console.log("--password----"+password);
    connection.getConnection.query('select * from user where uname = "'+username+'";',function(error,rows,fields){//sql查询
        if (error != null){
            console.log(error)
            data.code = "fail";
            data.message = "数据库异常！";
            callback(data);
        } else if(rows.length == 0){
            connection.getConnection.query("insert into user(uname,pwd) values('"+username+"','"+password+"');",function(error,rows,fields){
                if (rows!=undefined) {
                    data.code = '000000';
                    data.message = '注册成功！';
                    callback(data);
                }else{
                    data.code = 'fail';
                    data.message = '手机号输入错误！';
                    callback(data);
                }
            });
        }else{
            data.code = "fail";
            data.message = "用户名已存在！";
            callback(data);
        }
    });

}

exports.regist = regist;
