const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config()
const { db } = require("./models/indexdb")
const app = express();

const memerout = require("./routes/membersroute")
const eventrouter = require("./routes/eventsroute")
const  blogsroute=require("./routes/blogsroute")
const CodingResourcetable = require ("./routes/codingresourcesroute")
//var corsOptions = {
  //origin: "http://localhost:8081"
//};

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json({ limit: '50mb' }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));




//setup connection to database
db.authenticate()
  .then(() => console.log("Connection has been established successfully to shecodeafrica database."))
  .catch((err) => console.log("Unable to connect to the shecodeafrica database:" + err));
//serve images in directory named images 
app.use('/images', express.static('Images'))
// use the root 
app.use("/", memerout);
app.use("/", blogsroute);
app.use("/",eventrouter)
app.use("/",CodingResourcetable)

// set port, listen for requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT} and To get started, visit: http://localhost:3000`);
});
