//dns: To do DNS lookups and name resolution functions
//Look up a web address, and write it's IP address:
var dns = require('dns');
var w3 = dns.lookup('w3schools.com', function (err, addresses, family) {
  console.log(addresses);
});
