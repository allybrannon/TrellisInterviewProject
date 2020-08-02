const express = require("express");

// In-memory 'database' object
const db = {
  sensors: [
    {
      id: 1,
      name: "North Sensor",
      description: "The sensor in the north",
    },
    {
      id: 2,
      name: "South Sensor",
      description: "The south field sensor",
    },
    {
      id: 3,
      name: "East Sensor",
      description: "The sensor on the east side",
    },
    {
      id: 4,
      name: "West Sensor",
      description: "The western most sensor",
    },
  ],
};
module.exports = db.sensors;
