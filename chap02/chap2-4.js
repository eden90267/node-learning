var http = require('http');

var server = http.createServer();

// 用戶發出請求
server.on('request', function(request, response) {
	console.log('request event');

	response.writeHead(200, {'Content-Type':'text/plain'});
	response.end('Hello World\n');
});

// 新用戶連上應用程式
server.on('connection', function() {
	console.log('connection event');
});

server.listen(8124, function() {
	console.log('listening event');
});

console.log('Server running on port 8124');