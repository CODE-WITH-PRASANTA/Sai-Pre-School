const express = require("express");
const router = express.Router();

const {
  getClasses,
  createClass,
  updateClass,
  deleteClass,
} = require("../controllers/classesController");


router.get("/classes", getClasses);

router.post("/classes", createClass);

router.put("/classes/:id", updateClass);

router.delete("/classes/:id", deleteClass);


module.exports = router;