const express = require("express");
const Energiser = require("../models/energisers");

const router = express.Router();

router.get("/", async (req, res, next) => {
  console.log("in here");
  try {
    const energisers = await Energiser.find({});
    res.json({ payload: { energisers } });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error finding energisers in database", error: err });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const energiser = new Energiser(req.body);
    await energiser.save();
    res.status(201).json({ payload: { energiser } });
  } catch (err) {
    res.status(500).json({ message: "Error creating the energiser", err });
  }
});

module.exports = router;
