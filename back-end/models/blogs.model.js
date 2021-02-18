const Sequelize = require("sequelize");
const { db } = require("./indexdb");

const Blogs = db.define("Blogs", {
  Image: {
    type: Sequelize.STRING,
  },
  Title: {
    type: Sequelize.STRING,
  },
  Author: {
    type: Sequelize.STRING,
  },
  Text: {
    type: Sequelize.STRING,
  },
  postedAt: {
    type: Sequelize.STRING,
  },
});

Blogs.sync().then(() => {
  console.log("Blogs is created in shecodeafricaDB with succ !!");
});
module.exports = Blogs;
