const express = require("express");
const router = express.Router();

const { upload, convertToWebp } = require("../middlewares/uploads");

const {
  createGallery,
  getGallery,
  updateGallery,
  deleteGallery,
} = require("../controllers/galleryController");

/* CREATE */
router.post(
  "/photo-gallery",
  upload.single("image"),
  convertToWebp,
  createGallery
);

/* GET */
router.get("/photo-gallery", getGallery);

/* UPDATE */
router.put(
  "/photo-gallery/:id",
  upload.single("image"),
  convertToWebp,
  updateGallery
);

/* DELETE */
router.delete("/photo-gallery/:id", deleteGallery);

module.exports = router;