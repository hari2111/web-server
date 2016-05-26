	var middleware={
	requireAuthentication:function(req,res,next){
		console.log('private route');
		next();
	},
	logger: function(req,res,next){
		console.log(req.method+  Date().toString() +''+req.originalUrl);
		next();
	}
}
module.exports=middleware;