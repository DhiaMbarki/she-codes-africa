const Sequelize = require("sequelize");
const { db } = require("./indexdb");

const CodingResourcetable = db.define("CodingResourcetable", {
  Title: {
    type: Sequelize.STRING,
  },
  Link: {
    type: Sequelize.STRING,
  },
  Topic: {
    type: Sequelize.STRING,
  },
  Level: {
    type: Sequelize.STRING,
  },
  Format: {
    type: Sequelize.STRING,
  }
});

CodingResourcetable.sync().then(() => {
  console.log("CodingResourcetable  is   created  in shecodeafricaDB with succ !!");
});
module.exports = CodingResourcetable;
