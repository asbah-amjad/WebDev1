var http = require("http");
var fs = require("fs");

module.exports = http
  .createServer(function (req, res) {
    var url = req.url;

    if (url === "/classical") {
      fs.readFile("homer.html", "utf8", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else if (url === "/modern") {
      fs.readFile("bradbury.html", "utf8", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else if (url === "/") {
      fs.readFile("index.html", "utf8", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else {
      res.statusCode = 404;
      res.statusMessage = "Requested content not found";
      res.end();
    }
  })
  .listen(3000);
