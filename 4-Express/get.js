var express = require ('express');

var app = express();

//  /:data is specifying that when you accesss test URL, we can provide additional data after slash(/)
app.get('/text/:data', function (req,res){
    // To get the parameter provided in the url, here its ':data'
    res.send(req.params);
});

app.listen(8080, ()=> {console.log('Server Started!');});

//  Output: This data is in JSON format, its a way of repreenting objects and data
//  JSON organizes data in a list of property and value

// {
    // "data": "mansi"
// }