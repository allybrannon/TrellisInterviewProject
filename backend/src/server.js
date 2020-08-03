const express = require("express");

// Create express app
const app = express();

// create database for sensors
const database = require("./database.js");

// create routes for each sensor
const northSensor = require("../routes/northSensor.js");
const southSensor = require("../routes/southSensor.js");
const eastSensor = require("../routes/eastSensor.js");
const westSensor = require("../routes/westSensor.js");

//use routes for each sensor
app.use("/sensors/northSensor", northSensor);
app.use("/sensors/southSensor", southSensor);
app.use("/sensors/eastSensor", eastSensor);
app.use("/sensors/westSensor", westSensor);

app.use(function (req, res, next) {
  // Allow CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.json("Backend Home Page");
});

app.get("/sensors", (req, res) => {
  // Return all sensors
  res.json(database);
});

const PORT = 9000;
app.listen(PORT);
console.log("Express listening on port " + PORT);
