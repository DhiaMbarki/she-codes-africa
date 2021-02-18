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
      message: "Events registered in shecodeafrica database with success !",
      Savedata,
    });
  } catch (err) {
    res.status(500).send({ errorRegistration: err.message });
  }
});
router.get("/fetechallevents", async (req, res) => {
  try {
    const AllEvents = await Events.findAll({
      order: [["createdAt", "DESC"]],
    });
    res
      .status(200)
      .json({
        message: "Fetched AllEvents from Event's table successfully",
        AllEvents,
      });
  } catch (err) {
    res.status(500).json({ "Error Fetching from DB": err.message });
  }
});

router.get("/fetechoneevent/:id",(req, res) => {
  const id = req.params.id;

  Events.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving from Event  with id=" + id,err
      });
    });
});


module.exports = router;

