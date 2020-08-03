const express = require("express");

// In-memory 'database' object
const db = {
  sensors: [
    {
      id: 1,
      name: "North Sensor",
      description: "The sensor in the north",
      note: [],
    },
    {
      id: 2,
      name: "South Sensor",
      description: "The south field sensor",
      note: [],
    },
    {
      id: 3,
      name: "East Sensor",
      description: "The sensor on the east side",
      note: [],
    },
    {
      id: 4,
      name: "West Sensor",
      description: "The western most sensor",
      note: [],
    },
  ],
};
module.exports = db.sensors;
