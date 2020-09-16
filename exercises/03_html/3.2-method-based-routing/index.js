var http = require("http");
var fs = require("fs");

var server = http
  .createServer(function (req, res) {
    if (http.request("GET")) {
      fs.readFile("get.html", "utf8", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else if (http.request("POST")) {
      fs.readFile("post.html", "utf8", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else {
      res.writeHead(405, { Allow: "GET,POST" });
      res.statusMessage = "Method Not Allowed";
      res.end();
    }
  })
  .listen(3000);
