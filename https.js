//https: To make Node.js act as an HTTPS server
//Create a server that listens on port 8080 of your computer.
//When port 8080 get accessed, write "Hello World!" back as a response:
var http = require('https');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(8080);
