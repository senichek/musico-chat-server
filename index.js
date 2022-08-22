require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const port = process.env.PORT || 5000;

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000/",
    methods: ["GET", "POST"],
  },
});

server.listen(3000, () => {
  console.log(`Server has started on port ${port}`);
});
