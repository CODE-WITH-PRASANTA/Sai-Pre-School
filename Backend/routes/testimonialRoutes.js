const express = require("express");
const router = express.Router();

<<<<<<< HEAD
const upload = require("../middleware/upload");

=======
>>>>>>> 9fc4565e3103d9b44e0f372a1a1870ea91fe6981
const {
  createTestimonial,
  getTestimonials,
  updateTestimonial,
  deleteTestimonial,
<<<<<<< HEAD
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
=======
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
>>>>>>> 9fc4565e3103d9b44e0f372a1a1870ea91fe6981

module.exports = router;