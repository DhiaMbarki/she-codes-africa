const Sequelize = require("sequelize");
const { db } = require("./indexdb");

const CompanyPostJobstable = db.define("CompanyPostJobstable", {
  IdFb: {
    type: Sequelize.STRING,
  },
  CompanyprofileUrl: {
    type: Sequelize.STRING,
  },
  CLoudinary_id: {
    type: Sequelize.STRING,
  },
  CompanyName: {
    type: Sequelize.STRING,
  },
  Location: {
    type: Sequelize.STRING,
  },
  TypesOfEmployees: {
    type: Sequelize.STRING,
  },
  Description: {
    type: Sequelize.STRING,
  }
});

CompanyPostJobstable.sync().then(() => {
  console.log("Memberstable  is   created  in shecodeafricaDB with succ !!");
});
module.exports = CompanyPostJobstable;
