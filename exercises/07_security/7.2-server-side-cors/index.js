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
      return res.end("Origin header not in the request");
    }
    // TODO: handle HEAD HTTP method, 
    // remember to add CORS headers to response
    if(req.method === "HEAD"){
        //res.statusCode = 200;
        res.writeHead(200);
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods","HEAD, GET, POST");
        res.setHeader("Access-Control-Max-Age", "7200");
        return res.end();
    }
    // TODO: handle GET and POST HTTP methods, 
    // remember to add CORS headers to response
    else if(req.method === "GET" || req.method === "POST"){
        //res.statusCode = 200;
        res.writeHead(400);
       // res.statusMessage = "I was requested using CORS!";
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods","HEAD, GET, POST");
        res.setHeader("Access-Control-Max-Age", "7200");
        return res.end("I was requested using CORS!");
    }
    // TODO: handle HTTP methods that are not allowed, 
    // remember to add CORS headers to response
    else{
        //res.statusCode = 405;
        res.writeHead(405);
        //res.statusMessage = "Request used a HTTP method which is not allowed.";
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods","HEAD, GET, POST");
        res.setHeader("Access-Control-Max-Age", "7200");
        return res.end("Request used a HTTP method which is not allowed.");
    }

}).listen(port);