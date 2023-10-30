var http = require("http");

http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.end("<h1><center>Hello</center></h1>");
}).listen(8080,()=>{console.log('Server started');});

// Alternative Way

const htp = require("http");

const server = http.createServer( function (req,res){
    res.writeHead(200,{"content-type":"text/html"});
    res.end("<h1><center>Hello NODEJS</center></h1>");
});

server.listen(8000, function(){
    console.log("Server Run");
})