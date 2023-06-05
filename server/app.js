const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });
require("./db/conn");

const port = process.env.PORT;

// Middleware

const middleware = (req, res, next) => {
  console.log(`Hello my middleware`);
  next();
};

app.get("/", (req, res) => {
  res.send(`Hello world from the server`);
});

app.get("/about", middleware, (req, res) => {
  res.send(`Hello About world from the server`);
});

app.get("/contact", (req, res) => {
  res.send(`Hello Contact world from the server`);
});

app.get("/signin", (req, res) => {
  res.send(`Hello Login world from the server`);
});

app.get("/signup", (req, res) => {
  res.send(`Hello Registration world from the server`);
});

app.listen(port, () => {
  console.log(`Server is running at port no. ${port}`);
});
