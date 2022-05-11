const express = require("express");
const router = new express.Router();
const Student= require('../model/student');
router.get("/nabeel", (req, res) => {
  res.send("Hello from the other side ...");
});
router.post("/students", async (req, res) => {
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
  router.get("/students", async (req, res) => {
    try {
      const result = await Student.find();
      res.status(201).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  // get indivisual data
  router.get("/students/:id", async (req, res) => {
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
  
  router.patch("/students/:id",async(req,res)=>{
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
  router.delete("/students/:id",async(req,res)=>{
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
module.exports= router;
