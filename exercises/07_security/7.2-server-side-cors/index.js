const http = require('http');
const port = 3000;

http.createServer((req, res) => {
    // Remove the line 'res.end();' below when you start your own development
   // res.end();
   
    //const headers = {
        /** TODO: add the required CORS headers */ 
        
    //};
    
    //if origin header is not set in req
    if(!req.headers['origin']){
      res.writeHead(400);
     // res.statusMessage = "Origin header not in the request";
      res.end("Origin header not in the request");
    }
    // TODO: handle HEAD HTTP method, 
    // remember to add CORS headers to response
    if(req.method === "HEAD"){
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods","HEAD, GET, POST");
        res.setHeader("Access-Control-Max-Age", "7200");
        res.writeHead(200);
        res.end();
    }
    // TODO: handle GET and POST HTTP methods, 
    // remember to add CORS headers to response
    else if(req.method === "GET" || req.method === "POST"){
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods","HEAD, GET, POST");
        res.setHeader("Access-Control-Max-Age", "7200");
        res.writeHead(200);
        res.write("I was requested using CORS!");
        res.end();
    }
    // TODO: handle HTTP methods that are not allowed, 
    // remember to add CORS headers to response
    else{
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods","HEAD, GET, POST");
        res.setHeader("Access-Control-Max-Age", "7200");
        res.writeHead(405);
        res.write("Request used a HTTP method which is not allowed.");
        res.end();
    }

}).listen(port);