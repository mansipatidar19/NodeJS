var express = require ('express');

var app = express();

// We set up storage as constant, because we will not change the storage in application, once set.
const storage = require('node-persist');

var bodyParser = require('body-parser');

// This obj will be used to parse JSON in any scenarios
var jsonParser = bodyParser.json();

// Intialise our storage, on our device
storage.init();

/*
For storing data, node-persist (persistance storage data structure) is used.
It creates map, that can map in ID to a value.
We will be able to place data into their using ID to value mapping and retrieve it using ID as well.
*/

/* We will use another element named as body-parser, which allows us to parse JSON data properly.
*/

/* 
async means we run it as the same time of our other code in the application.
The code will not for the data base operation to complete, it will proceed to next operations.
*/

app.post("/student",jsonParser, async(req,res)=>{
    // res.body will go into the body of the request, find student_id and place it in student_id variable, similarly for name
    const {student_id, student_name} = req.body;
    // await will wait for the command to finish and after that it will move to line 3 
    // setItem is going to set a new item into this map
    await storage.setItem(student_id,student_name);

    res.send("Added student!");
})

app.listen(8080,()=>{console.log('Server Started!');})