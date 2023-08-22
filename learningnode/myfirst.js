let http = require("http");
let date = require("./dateModule")
let port = 8080;

http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(`Hello world.
  I'm writing this on: ${date.dateTime()}`);
  response.end();
}).listen(port);

console.log(`Server in: http://localhost:${port}`)