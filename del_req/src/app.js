const express = require("express");
require("./db/con");
const Student = require("./model/student");
const validator = require("validator");
const port = process.env.PORT || 8000;
const app = express();
app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("hellow from the home side ...");
// });
// create new students
// app.post("/students", (req, res) => {
//   console.log(req.body);
//   const user = new Student(req.body);
//   user
//     .save()
//     .then((result) => {
//       res.status(201).send(user);
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     });
//   //   res.send("hellow from the other side ...");
// });
app.post("/students", async (req, res) => {
  try {
    console.log(req.body);
    const user = new Student(req.body);
    const createUser = await user.save();
    res.send(createUser);
  } catch (error) {
    res.send(error);
  }
  //   res.send("hellow from the other side ...");
});
// get student data
app.get("/students", async (req, res) => {
  try {
    const result = await Student.find();
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});
// get indivisual data
app.get("/students/:id", async (req, res) => {
  try {
    // const result = await Student.find();
    // res.status(201).send(result);
    const _id = req.params.id;
    //  console.log(_id);
    const result = await Student.findById(_id);
    if (!result) {
      return res.status(404).send();
    } else {
      res.status(201).send(result);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});
// update Student data by id

app.patch("/students/:id",async(req,res)=>{
try {
  const _id = req.params.id;
  const result = await Student.findByIdAndUpdate(_id,req.body,{
    new :true
  });
  if (!result) {
    return res.status(404).send();
  } else {
    res.status(201).send(result);
  }
} catch (error) {
  res.status(500).send(error);
}
})
// delete student data    
app.delete("/students/:id",async(req,res)=>{
try {
  const _id = req.params.id;
const result= await Student.findByIdAndDelete(_id);
if (!result) {
  return res.status(404).send();
} else {
  res.status(201).send(result);
}
} catch (error) {
  res.status(500).send(error);
}
});
app.listen(port, () => {
  console.log(`listening to port no ${port}`);
});
