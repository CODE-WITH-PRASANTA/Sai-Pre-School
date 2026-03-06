const express = require("express");
const router = express.Router();

const { upload, convertToWebp } = require("../middlewares/uploads");

const {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent
} = require("../controllers/eventController");


/* CREATE */
router.post(
  "/events",
  upload.single("image"),
  convertToWebp,
  createEvent
);


/* GET */
router.get("/events", getEvents);


/* UPDATE */
router.put(
  "/events/:id",
  upload.single("image"),
  convertToWebp,
  updateEvent
);


/* DELETE */
router.delete("/events/:id", deleteEvent);


module.exports = router;