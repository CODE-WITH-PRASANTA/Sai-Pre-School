const express = require("express");
const router = express.Router();

const { upload, convertToWebp } = require("../middlewares/uploads");

const {
  createTeacher,
  getTeachers,
  updateTeacher,
  deleteTeacher,
} = require("../controllers/teacher.controller");

/* ================= CREATE ================= */
router.post(
  "/teachers",
  upload.single("image"),
  convertToWebp,
  createTeacher
);

/* ================= GET ================= */
router.get("/teachers", getTeachers);

/* ================= UPDATE ================= */
router.put(
  "/teachers/:id",
  upload.single("image"),
  convertToWebp,
  updateTeacher
);

/* ================= DELETE ================= */
router.delete("/teachers/:id", deleteTeacher);

module.exports = router;