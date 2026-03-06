const News = require("../models/newsModel");
const { deleteImageFile } = require("../middlewares/uploads");

/* CREATE NEWS */
exports.createNews = async (req, res) => {
  try {
    const news = await News.create(req.body);

    res.json({
      success: true,
      data: news,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* GET NEWS */
exports.getNews = async (req, res) => {
  const news = await News.find().sort({ createdAt: -1 });

  res.json({
    success: true,
    data: news,
  });
};

/* UPDATE NEWS */
exports.updateNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);

    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }

    if (req.body.image && news.image) {
      deleteImageFile(news.image);
    }

    Object.assign(news, req.body);
    await news.save();

    res.json({ success: true, data: news });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* DELETE NEWS */
exports.deleteNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);

    if (!news) {
      return res.status(404).json({ message: "Not found" });
    }

    deleteImageFile(news.image);

    await news.deleteOne();

    res.json({ success: true });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};