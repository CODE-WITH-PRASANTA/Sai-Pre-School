const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");

const {
  createTestimonial,
  getTestimonials,
  updateTestimonial,
  deleteTestimonial,
  togglePublish,
} = require("../controllers/testimonialController");


// CREATE
router.post("/testimonial", upload.single("image"), createTestimonial);

// GET
router.get("/testimonial", getTestimonials);

// UPDATE
router.put("/testimonial/:id", upload.single("image"), updateTestimonial);

// DELETE
router.delete("/testimonial/:id", deleteTestimonial);

// PUBLISH
router.patch("/testimonial/status/:id", togglePublish);

module.exports = router;