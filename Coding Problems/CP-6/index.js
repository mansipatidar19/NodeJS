let express = require ('express');
let url = require('url');
let app = express();
 
app.get('/add',(req,res)=>{
    let inurl = url.parse(req.url, true);
    let nums = inurl.query;
    res.send(`<h1>${nums.num1}+ ${nums.num2} = ${Number(nums.num1) + Number(nums.num2)}</h1>`)
});

app.listen(8080, ()=>{console.log('Server Started!');})