const express = require("express");
const server = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// create
server.post("/insert", (request, response) => {});
// read
server.get("/getAll", (request, response) => {
  response.json({ success: true });
});

// update

// delete

server.listen(process.env.PORT, () => console.log("app is running"));
