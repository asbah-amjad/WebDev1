var http = require("http");

var server = http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    var data = JSON.stringify(req.headers);
    console.log(data);
    res.write(data);
    return res.end();
  })
  .listen(3000);
