var express = require("express");
var app = express();
var http = require("http").Server(app);
var bodyParser = require("body-parser");

var path = require("path");
var cors = require("cors"); //import the cors package.

// Sockets import

const io = require("socket.io")(http);
const PORT = 3000;

app.use(cors()); // Add cors middleware to the express application
app.use(bodyParser.json());


app.post("/api/auth", require("./users.js"));

io.on("connection", (socket) => {
  socket.on("join", function (data) {
    socket.join(data.room);
    io.emit("new user joined", {
      user: data.user,
      message: "has joined  room.",
    });
  });
  socket.on("leave", function (data) {
    io.emit("left room", { user: data.user, message: "has left room." });
    socket.leave(data.room);
  });

  socket.on("message", function (data) {
    io.in(data.room).emit("new message", {
      user: data.user,
      message: data.message,
    });
  });
});

http.listen(PORT);
