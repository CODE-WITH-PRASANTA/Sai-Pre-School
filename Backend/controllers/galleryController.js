const Gallery = require("../models/galleryModel");
const { deleteImageFile } = require("../middlewares/uploads");

/* CREATE IMAGE */
exports.createGallery = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    const gallery = await Gallery.create({
      image: req.file.path,
    });

    res.status(201).json({
      success: true,
      data: gallery,
    });
  } catch (error) {
    console.log("CREATE ERROR:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

/* GET ALL IMAGES */
exports.getGallery = async (req, res) => {
  try {
    const gallery = await Gallery.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: gallery,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/* UPDATE IMAGE */
exports.updateGallery = async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id);

    if (!gallery) {
      return res.status(404).json({
        success: false,
        message: "Not found",
      });
    }

    if (req.file) {
      deleteImageFile(gallery.image);
      gallery.image = req.file.path;
    }

    await gallery.save();

    res.json({
      success: true,
      data: gallery,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/* DELETE IMAGE */
exports.deleteGallery = async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id);

    if (!gallery) {
      return res.status(404).json({
        success: false,
        message: "Not found",
      });
    }

    deleteImageFile(gallery.image);

    await gallery.deleteOne();

    res.json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
