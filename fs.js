//fs: To handle the file system
//Open a file, and output the content:
var fs = require('fs');
fs.readFile('demofile.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});
