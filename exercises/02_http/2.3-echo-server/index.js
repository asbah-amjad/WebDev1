var http = require("http");

var server = http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    req.on("data", function (message) {
      res.write(message);
    });
    req.on("end", function () {
      res.end();
    });
  })
  .listen(3000);
