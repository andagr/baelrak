var http = require('http');

var server = http.createServer(function(request, response) {
    response.end('<html><body><h1>Hello!</h1></body></html>');
}).listen(process.env.PORT || 5000);
