const Sequelize = require("sequelize");
const { db } = require("./indexdb");

const Companystable = db.define("Companystable", {
  IdFb: {
    type: Sequelize.STRING,
  },
  PhotosprofileUrl: {
    type: Sequelize.STRING,
  },
  CLoudinary_id: {
    type: Sequelize.STRING,
  },
  aboutCompany: {
    type: Sequelize.STRING,
  },
  companyName: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.STRING,
  },
  website: {
    type: Sequelize.STRING,
  },
  linkedin: {
    type: Sequelize.STRING,
  },
  field: {
    type: Sequelize.STRING,
  }
});

Companystable.sync().then(() => {
  console.log("Companystable  is   created  in shecodeafricaDB with succ !!");
});
module.exports = Companystable;
