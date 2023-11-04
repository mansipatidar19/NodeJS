var express = require("express");
var app = express();
const storage = require("node-persist");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

storage.init();

// :id is path variable
app.get("/student/:id", async (req, res) => {
  // we have to wait to get an item from the storage and then send back as a response
  // the item corresponds id we use req.params.id so its key value pair
  if ((await storage.keys()).includes(req.params.id)) {
    res.send(await storage.getItem(req.params.id));
  } else {
    res.send("Student not found!");
  }
}); 

app.post("/student", jsonParser, async (req, res) => {
  const { student_id, student_name } = req.body;
  await storage.setItem(student_id, student_name);
  res.send("Added student!");
});

app.listen(8080, () => {
  console.log("Server Started!");
});
