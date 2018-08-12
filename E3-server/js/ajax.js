
var new_element=document.createElement("script");
new_element.setAttribute("type","text/javascript");
new_element.setAttribute("src","../js/md5.js");// 在这里引入了a.js
document.body.appendChild(new_element);

var load_element=document.createElement("script");
load_element.setAttribute("type","text/javascript");
load_element.setAttribute("src","../js/load.js");// 在这里引入了a.js
document.body.appendChild(load_element);

	var httpUrl = "http://192.168.1.108:3000/";//gateway
	var app_key = "9e304d4e8df1b74cfa009913198428ab";
	var v = "v1.0";
	var sign_method = "md5";
	var signConstant = "4f4f8dd219bbdde0ae6bbe02be217c3a";
	session_key = localStorage.getItem('session_key');
	
	//获取当前时间戳
	function getTimestamp(){
		return (Date.parse(new Date())/1000).toString();
	}
	//获取sign签名 
	function getSign(keyOptions){
		var sign = signConstant;
		var isFirst = false;
		for (var  key in keyOptions) {
			if (!isFirst) {
				sign = sign +key+'='+keyOptions[key];
				isFirst = true;
			}else {
				sign = sign + '&';
				sign = sign +key+'='+ keyOptions[key];
			}
		}
		sign = sign + signConstant;
		return sign;
	}
	
	//获取发送数据的
	 function getdata(options){
		var timestamp = getTimestamp();
		var sign = hex_md5(getSign(options));
		var data = {
			app_key:app_key,
			timestamp:timestamp,
			v:'v1.0',
			sign_method:'md5',
			session_key:session_key,
			sign:sign,
		};
		
		for (var key in options) {
			data[key] = options[key];
		}
		return data;
	}
	 
	function logData(data){
		console.log(JSON.stringify(data));
	}
	 

(function(w){
	//获取sessionKey
	w.ajax_get_SessionKey = function(){
		mui.ajax(httpUrl+'sessionkey',{
			dataType:'json',//服务器返回json格式数据
			type:'get',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
				logData(data);
				localStorage.setItem('session_key',data.session_key);
				//关闭启动页面
				closeStartScreent();
			},
			error:function(xhr,type,errorThrown){
				console.log(xhr)
				console.log(type)
				console.log(errorThrown)
			}
		});
	};
	
	//用户注册
	w.ajax_register = function(options){
		var data = getdata(options);
		mui.ajax(httpUrl + "yishi_register/", {
			data:data,
			dataType:'json',//服务器返回json格式数据
			type:'post',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
				console.log(data)
				logData(data);
				registerSeccess(data);
			},
			error:function(xhr,type,errorThrown){
				console.log(errorThrown)
				
			}
		});
	}
	
	//用户登陆
	w.ajax_login = function(options){
		var data = getdata(options);
		mui.ajax(httpUrl + 'yishi_login/',{
			data:data,
			dataType:'json',//服务器返回json格式数据
			type:'post',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
				logData(data);
				data.account = options.user_name;
				loginSuccess(data);
			},
			error:function(xhr,type,errorThrown){
				console.log(errorThrown);		

			}
		});
	}
	
	//修改密码
	w.ajax_change_pwd = function(options){
		var data = getdata(options);
		mui.ajax(httpUrl + 'yishi_change_pwd/',{
			data:data,
			dataType:'json',//服务器返回json格式数据
			type:'post',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
				logData(data);
				changePwdSuccess(data);
			},
			error:function(xhr,type,errorThrown){
				
			}
		});
	}
	
	//找回密码
	w.ajax_find_pwd = function(options){
		var data = getdata(options);
		mui.ajax(httpUrl + 'yishi_find_pwd/',{
			data:data,
			dataType:'json',//服务器返回json格式数据
			type:'post',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
				logData(data);
				changePwdSuccess(data);
			},
			error:function(xhr,type,errorThrown){
				
			}
		});
	}
	
	//退出登录
	w.ajax_logout = function(options){
		var data = getdata(options);
		mui.ajax(httpUrl + 'yishi_logout/',{
			data:data,
			dataType:'json',//服务器返回json格式数据
			type:'get',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
				console.log("---logout------1---");
				logData(data);
				logoutSuccess(data);
			},
			error:function(xhr,type,errorThrown){
				console.log("---logout------2---"+xhr);
				console.log("---logout------2---"+type);
				console.log("---logout------2---"+errorThrown);
			}
		});
	}
	
	//获取公司列表
	w.ajax_get_company_list = function(options) {
		startLoad();
		var data = getdata(options);
		mui.ajax(httpUrl + 'yishi_company_list/',{
			data:data,
			dataType:'json',//服务器返回json格式数据
			type:'get',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
				
				logData(data);
				setTimeout(function(){
					endLoad();
					companyListSuccess(data);
				},500);
			},
			error:function(xhr,type,errorThrown){
				
			}
		});
	}
	
	//获取公司详情
	w.ajax_get_company_detail = function(options) {
		startLoad();
		var data = getdata(options);
		mui.ajax(httpUrl + 'yishi_company_detail/',{
			data:data,
			dataType:'json',//服务器返回json格式数据
			type:'get',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
				
				logData(data);
				setTimeout(function(){
					endLoad();
					companyDetailSuccess(data);
				},500);
			},
			error:function(xhr,type,errorThrown){
				
			}
		});
	}
	
	//获取供应信息
	w.ajax_get_supply_list = function(options, callback) {
		startLoad();
		var data = getdata(options);
		mui.ajax(httpUrl + 'yishi_supply_list/',{
			data:data,
			dataType:'json',//服务器返回json格式数据
			type:'get',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
				
				logData(data);
				setTimeout(function(){
					endLoad();
					if (undefined != callback) callback(data);
				},500);
			},
			error:function(xhr,type,errorThrown){
				
			}
		});
	}
	
	//获取求购信息
	w.ajax_get_demand_list = function(options, callback) {
		startLoad();
		var data = getdata(options);
		mui.ajax(httpUrl + 'yishi_demand_list/',{
			data:data,
			dataType:'json',//服务器返回json格式数据
			type:'get',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
				
				logData(data);
				setTimeout(function(){
					endLoad();
					if (undefined != callback) callback(data);
				},500);
			},
			error:function(xhr,type,errorThrown){
				
			}
		});
	}
	
	//获取分类第一级
	w.ajax_get_first_category = function(options) {
		startLoad();
		var data = getdata(options);
		mui.ajax(httpUrl + 'yishi_first_category/',{
			data:data,
			dataType:'json',//服务器返回json格式数据
			type:'get',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
				
				logData(data);
				setTimeout(function(){
					endLoad();
					categoryStairSuccess(data);
				},500);
			},
			error:function(xhr,type,errorThrown){
				
			}
		});
	}
	
	//获取分类第二级
	w.ajax_get_sub_category = function(options){
		startLoad();
		var data = getdata(options);
		mui.ajax(httpUrl + 'yishi_sub_category/',{
			data:data,
			dataType:'json',//服务器返回json格式数据
			type:'get',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
				logData(data);
				setTimeout(function(){
					endLoad();
					categoryMoversSuccess(options.parent_category_id,data);
				},500);
				
			},
			error:function(xhr,type,errorThrown){
				
			}
		});
	}
	
	//获取分类产品
	w.ajax_get_product_list = function(options){
		startLoad();
		var data = getdata(options);
		mui.ajax(httpUrl + 'yishi_product_list/',{
			data:data,
			dataType:'json',//服务器返回json格式数据
			type:'get',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
				logData(data);
				setTimeout(function(){
					endLoad();
					productlistSuccess(data);
				},500);
				
				
			},
			error:function(xhr,type,errorThrown){
				
			}
		});
	}
	
	//查询用户喜欢的商品
	w.ajax_get_likelist = function(options){
		startLoad();
		var data = getdata(options);
		mui.ajax(httpUrl + 'yishi_collect_list/', {
			data:data,
			dataType:'json',//服务器返回json格式数据
			type:'get',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
				logData(data);
				setTimeout(function(){
					endLoad();
					likelistSuccess(data);
				},500);
				
				
			},
			error:function(xhr,type,errorThrown){
				
			}
		});
	}
	
	//删除喜欢的商品
	w.ajax_delete_likeItem = function(options){
		startLoad();
		var data = getdata(options);
		mui.ajax(httpUrl + 'yishi_delete_collect/',{
			data:data,
			dataType:'json',//服务器返回json格式数据
			type:'get',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
				logData(data);
				data.id = options.product_id;
				setTimeout(function(){
					endLoad();
					deleteItemSuccess(data);
				},500);
				
			},
			error:function(xhr,type,errorThrown){
				
			}
		});
		
	}
	
	//商品详情
	w.ajax_get_product_detail = function(options){
		startLoad();
		var data = getdata(options);
		mui.ajax(httpUrl + 'yishi_product_detail/',{
			data:data,
			dataType:'json',//服务器返回json格式数据
			type:'get',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
				logData(data);
				data.id = options.product_id;
				setTimeout(function(){
					endLoad();
					productDetailSuccess(data);
				},500);
				
				
			},
			error:function(xhr,type,errorThrown){
				
			}
		});
	}
	
	//获取首页跑马灯
	w.ajax_get_Marquee = function(options){
		var data = getdata(options);
		mui.ajax(httpUrl + 'yishi_paomadeng/', {
			data:data,
			dataType:'json',
			type:'get',
			timeout:10000,
			success:function(data){
				logData(data);
				setTimeout(function(){
					endLoad();
					getMarqueeSuccess(data);
				},500);
				
			},
			error:function(xhr,type,errorThrown){
				
			}
		});
	}
	//获取推荐商品
	w.ajax_get_Recommend = function(options){
		startLoad();
		var data = getdata(options);
		mui.ajax(httpUrl + 'yishi_get_hot_products/',{
			data:data,
			dataType:'json',
			type:'get',
			timeout:10000,
			success:function(data){
				logData(data);
				setTimeout(function(){
					endLoad();
					getRecommendSuccess(data);
				},500);
				
				
			},
			error:function(xhr,type,errorThrown){
				
			}
		});
	}
	
	
})(window);
