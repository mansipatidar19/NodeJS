// Node more like file server

var fileServer = require("fs");
// fs is file system, it includes the functions & methods required in importing files

var http = require("http");

http.createServer((req, res) => {
  // this readFile will read the file as linked here
  // the function has two arguments (err and data)
  fileServer.readFile("test.html", (err, data) => {

    // the http status code & content-type (in below case it can be html or text)
    res.writeHead(200, { "content-type": "text/html" });
    // This will write the content from the html file
    res.write(data);
    return res.end("<h1><center>End</center></h1>");
  });
}).listen(8000,()=>{console.log("server");})
