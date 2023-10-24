// NPM & Express

// Express is a way of being able to simply implement API functionality in our server
// Express is a framework.

// npm i express command is used to install express

var express = require('express');
// 'express()' is a function exported by the Express.js module. When called, it returns a new instance of the Express 
// application.

// var 'app' creates a variable named app that holds the instance of the Express application. This variable is then used to 
// configure and define routes for your web application.
var app = express();

// In express, we can directly work with end points of the URL

// Same code as we are doing in server creation
app.get('/text', function (req,res){
    res.send('Hello World');
});

app.listen(8080, ()=> {console.log('Server Started!');});