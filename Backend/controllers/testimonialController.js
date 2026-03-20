const Testimonial = require("../models/testimonialModel");
<<<<<<< HEAD


// CREATE
exports.createTestimonial = async (req, res) => {
  try {
    const { name, designation, description, rating } = req.body;

    const image = req.file ? req.file.path : "";

    const testimonial = new Testimonial({
      name,
      designation,
      description,
      rating,
      image,
    });

    await testimonial.save();

    res.status(201).json({
      success: true,
      message: "Testimonial Created",
      testimonial,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
=======
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

    console.log("CREATE TESTIMONIAL ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
>>>>>>> 9fc4565e3103d9b44e0f372a1a1870ea91fe6981
  }
};


<<<<<<< HEAD
// GET ALL
exports.getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();

    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// UPDATE
exports.updateTestimonial = async (req, res) => {
  try {
    const { id } = req.params;

    const updateData = req.body;

    if (req.file) {
      updateData.image = req.file.path;
    }

    const testimonial = await Testimonial.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    res.json(testimonial);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// DELETE
exports.deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params;

    await Testimonial.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
=======
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

>>>>>>> 9fc4565e3103d9b44e0f372a1a1870ea91fe6981
  }
};


<<<<<<< HEAD
// PUBLISH / UNPUBLISH
exports.togglePublish = async (req, res) => {
  try {
=======
/* ================= UPDATE ================= */

exports.updateTestimonial = async (req, res) => {

  try {

    const testimonial = await Testimonial.findById(req.params.id);

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: "Not found",
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
        message: "Not found",
      });
    }

    deleteImageFile(testimonial.image);

    await testimonial.deleteOne();

    res.json({
      success: true,
      message: "Deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


/* ================= STATUS ================= */

exports.toggleStatus = async (req, res) => {

  try {

>>>>>>> 9fc4565e3103d9b44e0f372a1a1870ea91fe6981
    const testimonial = await Testimonial.findById(req.params.id);

    testimonial.status =
      testimonial.status === "Published"
        ? "Unpublished"
        : "Published";

    await testimonial.save();

<<<<<<< HEAD
    res.json(testimonial);
  } catch (error) {
    res.status(500).json({ error: error.message });
=======
    res.json({
      success: true,
      data: testimonial,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

>>>>>>> 9fc4565e3103d9b44e0f372a1a1870ea91fe6981
  }
};