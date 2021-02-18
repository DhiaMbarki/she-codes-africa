const express = require("express");
const router = express.Router();
const Companystable = require("../models/companies.model");
const multermiddel = require("../middelware/multer");
const cloud = require("../config/CLoudinaryconfi");

router.post("/editCompanyProfile", multermiddel, (request, response) => {
    // collected edits from company
    // const data = {
    //   image: request.body.image,
    //   label: request.body.label,
    // };
    // console.log("post request sent to cloudinary");
    // // upload image here
    // cloudinary.uploader
    //   .upload(data.image)
    //   .then((image) => {
    //     console.log("cloudinary stored it successfully");
    //     //////////////
    //     Companystable.iamges
    //       .create({ imageUrl: image.secure_url, label: data.label })
    //       .then((result) => {
    //         response.send(result);
    //       })
    //       .catch((err) => {
    //         console.log("error: ", err);
    //       });
    //     //////////
    //   })
    //   .catch((error) => {
    //     response.status(500).send({
    //       message: "db connection failure",
    //       error,
    //     });
    //   });
  });

  module.exports = router;
