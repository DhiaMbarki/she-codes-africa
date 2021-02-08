const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config()
const { db } = require("./models/indexdb")
const app = express();
const memerout=require("./routes/membersroute")

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json({ limit: '50mb' }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({  extended: true }));




//setup connection to database
db.authenticate()
  .then(() => console.log("Connection has been established successfully to shecodeafrica database.")) 
  .catch((err) => console.log("Unable to connect to the shecodeafrica database:" + err));
// use the root 
app.use("/", memerout);

// set port, listen for requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT} and To get started, visit: http://localhost:3000`);
});