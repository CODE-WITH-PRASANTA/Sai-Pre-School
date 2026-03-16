const express = require("express");
const router = express.Router();

const {
  createTestimonial,
  getTestimonials,
  updateTestimonial,
  deleteTestimonial,
  toggleStatus
} = require("../controllers/testimonialController");

const { upload, convertToWebp } = require("../middlewares/uploads");

router.post(
  "/testimonials",
  upload.single("image"),
  convertToWebp,
  createTestimonial
);

router.get("/testimonials", getTestimonials);

router.put(
  "/testimonials/:id",
  upload.single("image"),
  convertToWebp,
  updateTestimonial
);

router.delete("/testimonials/:id", deleteTestimonial);

router.patch("/testimonials/status/:id", toggleStatus);

module.exports = router;