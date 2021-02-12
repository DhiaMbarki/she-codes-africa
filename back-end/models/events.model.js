const Sequelize = require("sequelize");
const { db } = require("./indexdb");

const Events = db.define("Events", {
  Title: {
    type: Sequelize.STRING,
  },
  Date: {
    type: Sequelize.STRING,
  },
  Time: {
    type: Sequelize.STRING,
  },
  Image: {
    type: Sequelize.STRING,
  },
  Status: {
    type: Sequelize.STRING,
  },
  About: {
    type: Sequelize.STRING,
  },
});

Events.sync().then(() => {
  console.log("Events is created in shecodeafricaDB with succ !!");
});
module.exports = Events;
