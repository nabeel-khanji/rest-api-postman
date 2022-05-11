const express = require("express");
require("./db/con");
const Student = require('./models/students');
const validator = require("validator");
const port = process.env.PORT || 8000;
const app = express();
app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("hellow from the home side ...");
// });
// create new students
app.post("/students", (req, res) => {
    console.log(req.body);
    const user= new Student(req.body);
    user.save().then((result) => {
    res.status(201).send(user);
    }).catch((err) => {
        res.status(400).send(err);
    });
//   res.send("hellow from the other side ...");
});
app.listen(port, () => {
  console.log(`listening to port no ${port}`);
});
