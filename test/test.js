var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'wuyigq198869',
  database : 'mysql70'
});
 
connection.connect();
 
connection.query('select * from user where uname = "wuyi";',function(error,results,fields){//sql查询
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  // if (error) throw error;
  console.log('The solution is: ', results[0]);
});
