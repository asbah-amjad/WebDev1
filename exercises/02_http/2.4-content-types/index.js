var http = require("http");
var fs = require("fs");

var server = http
  .createServer(function (req, res) {
    console.log(req.headers);
    var acp = req.headers["accept"];
    console.log(acp);

    if ((acp = "application/json")) {
      fs.readFile("data.json", "utf8", function (err, data) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(data);
        return res.end();
      });
    } else if ((acp = "application/xml")) {
      fs.readFile("data.xml", "utf8", function (err, data) {
        res.writeHead(200, { "Content-Type": "application/xml" });
        res.write(data);
        return res.end();
      });
    } else if ((acp = "text/plain")) {
      fs.readFile("data.txt", "utf8", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write(data);
        return res.end();
      });
    } else if ((acp = "*/*")) {
      fs.readFile("data.txt", "utf8", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write(data);
        return res.end();
      });
    } else {
      res.statusCode = 406;
      res.statusMessage = "Content type not available";
    }
  })
  .listen(3000);
