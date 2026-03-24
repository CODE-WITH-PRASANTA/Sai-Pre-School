const express = require("express");
const router = express.Router();

const {
  createTestimonial,
  getTestimonials,
  updateTestimonial,
  deleteTestimonial,
  toggleStatus,
} = require("../controllers/testimonialController");

const { upload, convertToWebp } = require("../middlewares/uploads");

// CREATE
router.post(
  "/testimonials",
  upload.single("image"),
  convertToWebp,
  createTestimonial
);

// GET ALL
router.get("/testimonials", getTestimonials);

// UPDATE
router.put(
  "/testimonials/:id",
  upload.single("image"),
  convertToWebp,
  updateTestimonial
);

// DELETE
router.delete("/testimonials/:id", deleteTestimonial);

// STATUS (Publish / Unpublish)
router.patch("/testimonials/status/:id", toggleStatus);

module.exports = router;