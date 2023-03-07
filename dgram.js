//dgram: Provides implementation of UDP datagram sockets
//Make a file ("demo_dgram.js") that listens for messages on port 8080:
var dgram = require('dgram');
var s = dgram.createSocket('udp4');
s.on('message', function(msg, rinfo) {
  console.log('I got this message: ' + msg.toString());
});
s.bind(8080);
