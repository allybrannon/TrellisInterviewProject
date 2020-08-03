const express = require("express");
const router = express.Router();
const database = require("../src/database.js");

// South Sensor
router.get("/", async (req, res) => {
  const noteData = database[1];
  res.send(noteData);
  //   res.send("South sensor").status(200);
});

// get notes for South sensor (data 1)
router.get("/note", async (req, res) => {
  const getNotes = database[1].note;
  if (getNotes.length == 0) {
    res.send("No notes on record.");
  } else {
    res.send(getNotes);
  }
});

//delete notes from db
router.delete("/note/:id", async (req, res) => {
  res.send("Delete requested");
});
// create notes

module.exports = router;
