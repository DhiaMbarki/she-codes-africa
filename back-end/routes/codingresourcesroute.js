const express = require("express");
const router = express.Router();
const CodingResourcetable = require("../models/codingresources");
router.post("/codingres", async (req, res) => {
  try {
    const RstoS = req.body;
    //Insert data   into CodingResourcetable
    let ReSv = await CodingResourcetable.create(RstoS);
    res.status(201).send({
      message:
        "Ressource is  registered in shecodeafrica database with success!",
      ReSv,
    });
  } catch (err) {
    res.status(500).send({ errorRegistration: err.message });
  }
});
router.get("/fetechall", async (req, res) => {
  try {
    const Allressources = await CodingResourcetable.findAll({
      order: [["createdAt", "DESC"]],
    });
    res
      .status(200)
      .json({
        message: "Fetched from CodingResource table successfully",
        Allressources,
      });
  } catch (err) {
    res.status(500).json({ errorFetchingfromDB: err.message });
  }
});
module.exports = router;
