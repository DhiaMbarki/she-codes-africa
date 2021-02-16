require("dotenv").config();
//console.log((process.env.DB))
module.exports = {
  HOST: 'localhost',
  USER: 'postgres',
  PASSWORD: "12345",
  DB: process.env.DB,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}; 
