
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
const companyroute = require ('./routes/companies.route')

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
app.use("/",companyroute)

// set port, listen for requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT} and To get started, visit: http://localhost:3000`);
});

////////////////////////////////////////////////////////  Webinar
const users = {};

const socketToRoom = {};

io.on("connection", (socket) => {
  socket.on("join room", (roomID) => {
    if (users[roomID]) {
      const length = users[roomID].length;
      if (length === 4) {
        socket.emit("room full");
        return;
      }
      users[roomID].push(socket.id);
    } else {
      users[roomID] = [socket.id];
    }
    socketToRoom[socket.id] = roomID;
    const usersInThisRoom = users[roomID].filter((id) => id !== socket.id);

    socket.emit("all users", usersInThisRoom);
  });

  socket.on("sending signal", (payload) => {
    io.to(payload.userToSignal).emit("user joined", {
      signal: payload.signal,
      callerID: payload.callerID,
    });
  });

  socket.on("returning signal", (payload) => {
    io.to(payload.callerID).emit("receiving returned signal", {
      signal: payload.signal,
      id: socket.id,
    });
  });

  socket.on("disconnect", () => {
    const roomID = socketToRoom[socket.id];
    let room = users[roomID];
    if (room) {
      room = room.filter((id) => id !== socket.id);
      users[roomID] = room;
    }
  });
});

