const express = require("express");
const blogRouter = require("../blogs/blogs-router");
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(cors());
server.use("/api/posts", blogRouter);

module.exports = server;
