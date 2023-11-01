let express = require("express");
let app = express();

app.get("/blog/:id", (req, res) => {
  console.log(req.params);
  res.send(`<div style="text-align:center">
    <h1>Blog Post ${req.params.id}</h1>
    <h4>Blog Post ${req.params.id}</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla itaque ipsa nostrum beatae dolorem impedit in. Voluptate labore est quos!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus non nulla illo quis! Id eos laudantium, magni incidunt laborum ab.</p>
</div>`);
});

app.listen(5000, () => {
  console.log("Server Started!");
});
