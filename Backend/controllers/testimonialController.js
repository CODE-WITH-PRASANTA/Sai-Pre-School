const Testimonial = require("../models/testimonialModel");


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
  }
};


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
  }
};


// PUBLISH / UNPUBLISH
exports.togglePublish = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);

    testimonial.status =
      testimonial.status === "Published"
        ? "Unpublished"
        : "Published";

    await testimonial.save();

    res.json(testimonial);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};