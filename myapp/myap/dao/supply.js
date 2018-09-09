//supply
var connection = require("../config/config");//请求我们的数据库连接

var supply = function(type, id, callback){
    var data = {};
    if (type == 0) {
      connection.getConnection.query('select * from product;',function(error,rows,fields){//sql查询
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
                    list[i] = {id:rows[i].product_id,product_name:rows[i].product_name,product_sort_type:rows[i].product_sort_type,price:rows[i].price,
                        contact_name:rows[i].contact_name,contact_mobile:rows[i].contact_mobile,cover:rows[i].cover};
                }
                data.list = list;
                data.type = "success";
                data.code = "000000";
                callback(data);
            }
      });
    } else if (type == 1){
        connection.getConnection.query('select * from product where product_id = "'+id+'";',function(error,rows,fields){//sql查询
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

                data.id = info.product_id;
                data.product_name = info.product_name;
                data.product_sort_type = info.product_sort_type;
                data.price = info.price;
                data.cover = info.cover;
                data.detail = info.detail;
                data.contact_name = info.contact_name;
                data.contact_mobile = info.contact_mobile;
                data.collection_count = info.collection_count;
                data.created_at = info.created_at;
                data.area = info.area;
                data.type = "success";
                data.code = "000000";

                callback(data);
            }
        });
    }
}
 
exports.supply = supply;//对外提供我们的supply方法。
