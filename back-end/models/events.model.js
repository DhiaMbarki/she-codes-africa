const Sequelize = require("sequelize");
const { db } = require("./indexdb");

const Events = db.define("Events", {
  Image: {
    type: Sequelize.STRING,
  },
  Title: {
    type: Sequelize.STRING,
  },
  Date: {
    type: Sequelize.STRING,
  },
  Time: {
    type: Sequelize.STRING,
  },
  Status: {
    type: Sequelize.STRING,
  },
  About: {
    type: Sequelize.TEXT ,
  },
});

Events.sync().then(() => {
  console.log("Events is created in shecodeafricaDB with succ !!");
});
module.exports = Events;
