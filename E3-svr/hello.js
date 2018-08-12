var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
http.createServer(function (request, response) {
 	console.log(request.method)
 	if (request.method == "POST") {
 		var postdata = "";
        request.on("data",function(postchunk){
            postdata += postchunk;
        });
 
        request.on("end",function(){
        	console.log(postdata);
		});
 	} else if(request.url == "/json"){
        response.writeHead(200, {'Content-Type': 'application/json'});
        var data = {
            "name":"nodejs",
            "value":"stone"
        };
        response.end(JSON.stringify(data));
    }else if(request.url == "/sessionkey"){
        response.writeHead(200, {'Content-Type': 'application/json'});
        var data = {
            "session_key":"nodejs",
            "value":"stone"
        };
        response.end(JSON.stringify(data));
    }else{
        response.writeHead(200, {'Content-Type': 'text/plain'});
 		console.log(request.url)
        response.end('Hello World\n');
    }

}).listen(8888);
 
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');