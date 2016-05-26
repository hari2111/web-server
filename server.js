var express=require('express');
var app=express();
var port=3000;

var middleware={
	requireAuthentication:function(req,res,next){
		console.log('private route');
		next();
	},
	logger: function(req,res,next){
		console.log(req.method+  Date().toString() +''+req.originalUrl);
		next();
	}
};
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication,function(req,res){
	res.send('This is hari reporting from india')
});

app.use(express.static(__dirname+'/public'));
console.log('server running');
app.listen(port,function(){
	console.log('express server started '+ port);
});