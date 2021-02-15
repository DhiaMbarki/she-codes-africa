const express = require("express");
const router = express.Router();
const Blogs = require("../models/blogs.model");
const multermiddel = require("../middelware/multer");
const cloud = require("../config/CLoudinaryconfi");

router.post("/createBLogs", multermiddel, async (req, res) => {
  try {
    const result = await cloud.uploads(req.body.Image);
    var ImageCL = result.ImageUrl;
    var CLoudinary_idCL = result.id;
    const dts = {
      CLoudinary_id: CLoudinary_idCL,
      Image: ImageCL,
      Title: req.body.Title,
      Author: req.body.Author,
      Text: req.body.Text,
      postedAt: req.body.postedAt,
    };
    //Insert data into Blogs
    let Savedata = await Blogs.create(dts);
    res.status(201).send({
      message: "Blogs created in shecodeafrica database with success!",
      Savedata,
    });
  } catch (err) {
    res.status(500).send({ errorRegistration: err.message });
  }
});
module.exports = router;
