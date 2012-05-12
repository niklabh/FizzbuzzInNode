/*================================

Author:  niklabh811@gmail.com
		  @niklabh
		  
==================================*/
var fizzbuzz = function(num){
	if(num%15==0)
		return "fizzbuzz";
	else if(num%5==0)
		return "buzz";
	else if(num%3==0)
		return "fizz";
	return num;
}

var fizz = function(){
var i;
var s='';
for(i=1;i<=100;i++)
	s+=fizzbuzz(i)+'\n';
return s;
}

var http = require('http');
var server = http.createServer(function(req,res){
res.writeHead(200,{'content-type':'text/plain'});
res.write('\n');
res.end(fizz());
});

server.listen(8000);
console.log('server started listening at 8000');
