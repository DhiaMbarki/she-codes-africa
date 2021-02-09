const express = require('express');
const router = express.Router();
const Memberstable = require('../models/members.model')

router.post('/editprofile', async (req, res) => {
   
    try {
        const { IdFb, PhotosprofileUrl, Firstname, Lastname, DateOfBirth, Biography, Location,
            Githubacountlink, Linkedincountlink, Websiteurl, Engineeringareas, Gender, Howcanwehelpyousucced,
            Companyname, Jobtitle, YearsOfexperience, Codingstackinuse, Codingstacktolearn } = req.body;
        //Insert data   into Memberstable
        let Savedata = await Memberstable.create(
         req.body
        );
        res.status(201).send({ message: "User registered in shecodeafrica database with success!", Savedata });
    } catch (err) {
        res.status(500).send({ errorRegistration: err.message });
    }
});
module.exports = router;