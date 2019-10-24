var http = require("http");

var server = http.createServer(function(requst, response) {
  response.statusCode = 200;
  response.write("Hello World");
  response.end();
});

server.listen(3000);
console.log("node web-server is listening to port 3000");

module.exports.server = server;
