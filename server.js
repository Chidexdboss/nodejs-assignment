const http = require("http");
const getnames = require("./names.js");

const PORT = 8081;

const server = http.createServer((req, res) => {
    getnames(req, res);
});

server.listen(PORT, () => {
  console.log(`The Server is running on port ${PORT}`);
  
});

console.log('The Server running at http://127.0.0.1:8081/ Click to access');