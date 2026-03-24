const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      default: "",
    },

    name: {
      type: String,
      required: true,
    },

    designation: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    rating: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["Published", "Unpublished"],
      default: "Unpublished",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Testimonial", testimonialSchema);