const express = require("express");
const router = express.Router();
const { upload, convertToWebp } = require("../middlewares/uploads");

const {
  createNews,
  getNews,
  updateNews,
  deleteNews,
} = require("../controllers/newsController");

/* CREATE */
router.post(
  "/news",
  upload.single("image"),
  convertToWebp,
  createNews
);

/* GET */
router.get("/news", getNews);

/* UPDATE */
router.put(
  "/news/:id",
  upload.single("image"),
  convertToWebp,
  updateNews
);

/* DELETE */
router.delete("/news/:id", deleteNews);

module.exports = router;