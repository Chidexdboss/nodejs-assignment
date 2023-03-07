//Querystring: To handle URL query strings
//Parse a query string into an object, and extract the year property:
var querystring = require('querystring');
var q = querystring.parse('year=2017&month=february');
console.log(q.year);
