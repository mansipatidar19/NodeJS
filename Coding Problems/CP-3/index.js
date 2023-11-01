let express = require('express');
let app = express();

app.get('/intro', (req,res)=>{
    res.send(`<h1>Hi There!</h1>
    <h3>I am Mansi</h3>`)
});

app.listen(5000,()=>{console.log('Server Started!');})