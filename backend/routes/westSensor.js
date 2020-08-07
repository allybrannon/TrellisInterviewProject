const express = require("express");
const router = express.Router();
const database = require("../src/database.js");

// West Sensor
router.get("/", async (req, res) => {
  const noteData = database[3];
  res.send(noteData);
  //   res.send("West sensor").status(200);
});

// get notes for west sensor (data 3)
router.get("/note", async (req, res) => {
  const getNotes = database[3].note;
  if (getNotes.length == 0) {
    res.send("No notes on record.");
  } else {
    res.send(getNotes);
  }
});

//delete notes from db
router.delete("/note/:id", async (req, res) => {
  res.send("Delete requested");
  console.log("deleted");
});

// create notes in db
router.post("/note", async (req, res) => {});

module.exports = router;
