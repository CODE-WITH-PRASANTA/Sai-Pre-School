const express = require("express");
const router = express.Router();

const {
  createClass,
  getClasses,
  updateClass,
  deleteClass
} = require("../controllers/classController");

const { upload, convertToWebp } = require("../middlewares/uploads");


router.post(
  "/classes",
  upload.single("image"),
  convertToWebp,
  createClass
);

router.get(
  "/classes",
  getClasses
);

router.put(
  "/classes/:id",
  upload.single("image"),
  convertToWebp,
  updateClass
);

router.delete(
  "/classes/:id",
  deleteClass
);

module.exports = router;