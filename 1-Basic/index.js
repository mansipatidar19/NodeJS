// Main goal of NodeJs : It converts the JS into a Server Language. Its able to act like Web Server.

// declaring a variable 'http'
// Imports a library named http, which contains a bunch of code related to HTTP servers
// more like creating an obj: creating a refrence to the HTTP library.
var http = require("http");

// Now, we can use all the methods of http
// createServer() creates an instance of the server

// This server listens to a port on our computer & if anyone tries to refrence our computer at that port, this server will take in an request and do something to it.
http
  .createServer(function (request, response) {
    // here, we are creating a function that acts as a server
    // We can take the request process it and write a response and return response

    //   in http, when we create a response, we have to provide some details
    // the http status code & content-type (in below case it can be html or text)
    response.writeHead(200, { "Content-Type": "text/html" });
    //  Content that we want to return
    // It will touch to the end of the response, the below text 
    response.end("hello everyone!");
  })
  .listen(5000);
  // This listen will create the server at this location
