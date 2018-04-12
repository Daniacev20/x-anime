var http = require("http");

http.createServer(function(peticion, respuesta) {
	respuesta.end(Boolean(!!-1).toString());
}).listen(8080);