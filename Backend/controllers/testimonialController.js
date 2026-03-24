const Testimonial = require("../models/testimonialModel");
const { deleteImageFile } = require("../middlewares/uploads");

/* ================= CREATE ================= */
exports.createTestimonial = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    const testimonial = await Testimonial.create({
      name: req.body.name,
      designation: req.body.designation,
      description: req.body.description,
      rating: req.body.rating,
      image: req.file.path,
      status: "Unpublished",
    });

    res.status(201).json({
      success: true,
      data: testimonial,
    });
  } catch (error) {
    console.log("CREATE ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= GET ================= */
exports.getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: testimonials,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= UPDATE ================= */
exports.updateTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: "Testimonial not found",
      });
    }

    testimonial.name = req.body.name;
    testimonial.designation = req.body.designation;
    testimonial.description = req.body.description;
    testimonial.rating = req.body.rating;

    if (req.file) {
      deleteImageFile(testimonial.image);
      testimonial.image = req.file.path;
    }

    await testimonial.save();

    res.json({
      success: true,
      data: testimonial,
    });
  } catch (error) {
    console.log("UPDATE ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= DELETE ================= */
exports.deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: "Testimonial not found",
      });
    }

    deleteImageFile(testimonial.image);

    await testimonial.deleteOne();

    res.json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (error) {
    console.log("DELETE ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= STATUS ================= */
exports.toggleStatus = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: "Testimonial not found",
      });
    }

    testimonial.status =
      testimonial.status === "Published"
        ? "Unpublished"
        : "Published";

    await testimonial.save();

    res.json({
      success: true,
      data: testimonial,
    });
  } catch (error) {
    console.log("STATUS ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};