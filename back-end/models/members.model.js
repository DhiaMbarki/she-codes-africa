const Sequelize = require('sequelize');
const { db } = require('../database-mysql/indexdb');

const Memberstables = db.define("members", {
   { type: Sequelize.STRING },
   { type: Sequelize.STRING },
    //////
    //////
    //////
  });

};
Memberstables.sync().then(() => {
  console.log('MyUnsplashDB_Image_table_register created');

  module.exports=Memberstables
