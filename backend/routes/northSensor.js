const express = require("express");
const router = express.Router();
const database = require("../src/database.js");

// North Sensor
router.get("/", async (req, res) => {
  const noteData = database[0];
  res.send(noteData);
  //   res.send("North sensor").status(200);
});

// get notes for north sensor (data 0)
router.get("/note", async (req, res) => {
  const getNotes = database[0].note;
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
