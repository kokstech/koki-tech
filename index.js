const http = require("http")

http.createServer(function (req, res){
	console.log("kita")
	res.send("hello kikitech")
	res.end()

}   ).listen(3000);
