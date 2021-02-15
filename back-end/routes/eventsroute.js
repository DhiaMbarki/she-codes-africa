const express = require("express");
const router = express.Router();
const Events = require("../models/events.model");
const multermiddel = require("../middelware/multer");
const cloud = require("../config/CLoudinaryconfi");

router.post("/createEvent", multermiddel, async (req, res) => {
  try {
    const result = await cloud.uploads(req.body.Image);
    var ImageCL = result.ImageUrl;
    var CLoudinary_idCL = result.id;
    const dts = {
      CLoudinary_id: CLoudinary_idCL,
      Image: ImageCL,
      Title: req.body.Title,
      Date: req.body.Date,
      Time: req.body.Time,
      Status: req.body.Status,
      About: req.body.About,
     
    };
    //Insert data into Events
    let Savedata = await Events.create(dts);
    res.status(201).send({
      message: "Events created in shecodeafrica database with success!",
      Savedata,
    });
  } catch (err) {
    res.status(500).send({ errorRegistration: err.message });
  }
});
module.exports = router;
