//company
var connection = require("../config/config");//请求我们的数据库连接

var company = function(type, id, callback){
    var data = {};
    if (type ==0) {
    	connection.getConnection.query('select * from company;',function(error,rows,fields){//sql查询
            if (error != null){
                console.log(error)
                data.type = "fail";
                data.message = "数据库异常！";
                callback(data);
        	} else if(rows.length == 0){
                data.type = "fail";
                data.message = "公司不存在！";
        		callback(data);
        	}else{
                var list = new Array()
                for (var i=0; i<rows.length; i++)
                {
                    list[i] = {id:rows[i].company_id,name:rows[i].name,summary:rows[i].summary,logo:rows[i].logo};
                }
                data.list = list;
                data.type = "success";
                data.code = "000000";
                callback(data);
        	}
    	});
    } else if (type == 1){
        connection.getConnection.query('select * from company where company_id = "'+id+'";',function(error,rows,fields){//sql查询
            if (error != null){
                console.log(error)
                data.type = "fail";
                data.message = "数据库异常！";
                callback(data);
            } else if(rows.length == 0){
                data.type = "fail";
                data.message = "公司不存在！";
                callback(data);
            }else{
                var info = rows[0];

                data.id = info.company_id;
                data.name = info.name;
                data.desc = info.descs;
                data.logo = info.logo;
                data.size = info.size;
                data.address = info.address;
                data.com_type = info.com_type;
                data.business = info.business;
                data.found_date = info.found_date;
                data.type = "success";
                data.code = "000000";

                callback(data);
            }
        });
    }
}
 
exports.company = company;//对外提供我们的company方法。
