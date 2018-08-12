//数据库配置
var mysql = require("mysql");  //请求mysql

var connection = {};

connection.createConnection = mysql.createConnection({//建立数据库连接  
  host     : 'localhost',
  user     : 'root',
  password : 'wuyigq198869',
  database : 'mysql70',
  port     : 3306
});

connection.createConnection.connect();

exports.getConnection = connection.createConnection;//对外返回数据库连接
