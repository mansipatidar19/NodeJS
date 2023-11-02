let fs = require('fs');

let express = require('express');
let app = express();

app.get('/greet/:name', (req,res)=>{
    res.send(`
    <h1>Hello ${req.params.name}</h1>
    <h6>How are you @ ${req.params.name}</h6>`)
});

app.get('/greet', (req,res)=>{
    fs.readFile('greet.html',(err,data)=>{
        res.writeHead(200,{'content-type' : 'text/html'});
        res.write(data);
    });
});

app.get('/intro', (req,res)=>{
    fs.readFile('intro.html',(err,data)=>{
        res.writeHead(200,{'content-type' : 'text/html'});
        res.write(data);
    });
});

app.get('/message', (req,res)=>{
    fs.readFile('message.html',(err,data)=>{
        res.writeHead(200,{'content-type' : 'text/html'});
        res.write(data);
    });
});

app.listen(8080,()=>{console.log('Server Started!');})