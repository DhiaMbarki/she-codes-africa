const express = require("express");
const router = express.Router();
const Memberstable = require("../models/members.model");
const multermiddel = require("../middelware/multer");
const cloud = require("../config/CLoudinaryconfi");

router.post("/editprofile", multermiddel, async (req, res) => {
  try {
    const result = await cloud.uploads(req.body.PhotosprofileUrl);
    var PhotosprofileUrlCL = result.ImageUrl;
    var CLoudinary_idCL = result.id;
    const dts = {
      IdFb: req.body.IdFb,
      PhotosprofileUrl: PhotosprofileUrlCL,
      CLoudinary_id: CLoudinary_idCL,
      Firstname: req.body.Firstname,
      Lastname: req.body.Lastname,
      DateOfBirth: req.body.DateOfBirth,
      Biography: req.body.Biography,
      Location: req.body.Location,
      Githubacountlink: req.body.Githubacountlink,
      Linkedincountlink: req.body.Linkedincountlink,
      Websiteurl: req.body.Websiteurl,
      Engineeringareas: req.body.Engineeringareas,
      Gender: req.body.Gender,
      Howcanwehelpyousucced: req.body.Howcanwehelpyousucced,
      Companyname: req.body.Companyname,
      Jobtitle: req.body.Jobtitle,
      YearsOfexperience: req.body.YearsOfexperience,
      Codingstackinuse: req.body.Codingstackinuse,
      Codingstacktolearn: req.body.Codingstacktolearn,
    };
    //Insert data   into Memberstable
    let Savedata = await Memberstable.create(dts);
    res
      .status(201)
      .send({
        message: "User registered in shecodeafrica database with success!",
        Savedata,
      });
  } catch (err) {
    res.status(500).send({ errorRegistration: err.message });
  }
});
module.exports = router;
