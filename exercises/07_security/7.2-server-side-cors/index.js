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
      res.write("Origin header not in the request");
      res.end();
      return;
    }
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods","HEAD, GET, POST");
        res.setHeader("Access-Control-Max-Age", "7200");
    // TODO: handle HEAD HTTP method, 
    // remember to add CORS headers to response
    if(req.method === "HEAD"){
        
        res.writeHead(200);
        res.end();
        return;
    }
    // TODO: handle GET and POST HTTP methods, 
    // remember to add CORS headers to response
    else if(req.method === "GET" || req.method === "POST"){
        
        res.writeHead(200);
        res.write("I was requested using CORS!");
        res.end();
        return;
    }
    // TODO: handle HTTP methods that are not allowed, 
    // remember to add CORS headers to response
    else{
        
        res.writeHead(405);
        res.write("Request used a HTTP method which is not allowed.");
        res.end();
        return;
    }

}).listen(port);