const Sequelize = require("sequelize");
const { db } = require("./indexdb");

const Memberstable = db.define("Memberstable", {
  IdFb: {
    type: Sequelize.STRING,
  },
  PhotosprofileUrl: {
    type: Sequelize.STRING,
  },
  CLoudinary_id: {
    type: Sequelize.STRING,
  },
  Firstname: {
    type: Sequelize.STRING,
  },
  Lastname: {
    type: Sequelize.STRING,
  },
  DateOfBirth: {
    type: Sequelize.STRING,
  },
  Biography: {
    type: Sequelize.STRING,
  },
  Location: {
    type: Sequelize.STRING,
  },
  Githubacountlink: {
    type: Sequelize.STRING,
  },
  Linkedincountlink: {
    type: Sequelize.STRING,
  },
  Websiteurl: {
    type: Sequelize.STRING,
  },
  Engineeringareas: {
    type: Sequelize.STRING,
  },
  Gender: {
    type: Sequelize.STRING,
  },

  Howcanwehelpyousucced: {
    type: Sequelize.STRING,
  },
  Companyname: {
    type: Sequelize.STRING,
  },
  Jobtitle: {
    type: Sequelize.STRING,
  },
  YearsOfexperience: {
    type: Sequelize.INTEGER,
  },
  Codingstackinuse: {
    type: Sequelize.STRING,
  },
  Codingstacktolearn: {
    type: Sequelize.STRING,
  },
});

Memberstable.sync().then(() => {
  console.log("Memberstable  is   created  in shecodeafricaDB with succ !!");
});
module.exports = Memberstable;
