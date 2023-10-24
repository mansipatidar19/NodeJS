// Node file server using http, fs, and url modules

// Importing required modules
let http = require("http");
let fs = require("fs");
let url = require("url");

// Creating an HTTP server
http.createServer((req, res) => {
  
    // Parsing the requested URL
    let inURL = url.parse(req.url, true);

    // Constructing the file path from the URL
    let filename = "." + inURL.pathname;

    // Reading the file asynchronously
    fs.readFile(filename, (err, data) => {

        // Handling file read errors (e.g., file not found)
        if (err) {
            res.writeHead(404, { 'content-type': 'text/html' });
            res.write("<h1> 404! Page Not Found </h1>");
            return res.end();
        }

        // Writing HTTP response header with status code and content type
        res.writeHead(200, { 'content-type': 'text/html' });

        // Writing the content of the file to the response
        res.write(data);

        // Ending the response with an empty body
        return res.end();
    });
}).listen(8080, () => {
    console.log("Server started!");
});
