const express = require("express");
const router = express.Router();
const Blogstable = require("../models/blogs.model");

router.post("/blogs", async (req, res) => {
  try {
    const RstoS = req.body;
    //Insert data   into Blogstable
    let ReSv = await Blogstable.create(RstoS);
    res.status(201).send({
      message:
        "Blogs is  registered in shecodeafrica database with success!",
      ReSv,
    });
  } catch (err) {
    res.status(500).send({ errorRegistration: err.message });
  }
});
router.get("/fetechall", async (req, res) => {
  try {
    const AllBlogs = await Blogstable.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json({
      message: "Fetched from blogs table successfully",
      AllBlogs,
    });
  } catch (err) {
    res.status(500).json({ errorFetchingfromDB: err.message });
  }
});
module.exports = router;
