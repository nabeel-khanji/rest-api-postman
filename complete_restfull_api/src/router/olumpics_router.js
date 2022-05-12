const OlympicsRanking = require("../model/olympics_model");
const express = require("express");
const router = express.Router();

// post req
router.post("/mens", async (req, res) => {
  try {
    // res.send(req.body);
    const result = new OlympicsRanking(req.body);
    console.log(result);
    const insertMen = await result.save();
    res.status(201).send(insertMen);
  } catch (error) {
    res.status(400).send(error);
  }
});
// get req
router.get("/mens", async (req, res) => {
  try {
    // res.send(req.body);
    const result = await OlympicsRanking.find({});
    console.log(result);
    // const insertMen = await result.save();
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
}); // get req indivitual
router.get("/mens/:id", async (req, res) => {
  try {
    // res.send(req.body);
    const _id = req.params.id;

    const result = await OlympicsRanking.findById(_id);
    console.log(result);
    // const insertMen = await result.save();
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});
// update user
router.patch("/mens/:id", async (req, res) => {
  try {
    // res.send(req.body);
    const _id = req.params.id;

    const result = await OlympicsRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    console.log(result);
    // const insertMen = await result.save();
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});
// update user
router.delete("/mens/:id", async (req, res) => {
  try {
    // res.send(req.body);
    const _id = req.params.id;

    const result = await OlympicsRanking.findByIdAndDelete(_id);
    console.log(result);
    // const insertMen = await result.save();
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});
module.exports = router;
