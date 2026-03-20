const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
  {
    image: {
      type: String,
<<<<<<< HEAD
    },
=======
      default: "",
    },

>>>>>>> 9fc4565e3103d9b44e0f372a1a1870ea91fe6981
    name: {
      type: String,
      required: true,
    },
<<<<<<< HEAD
    designation: {
      type: String,
    },
    description: {
      type: String,
    },
=======

    designation: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

>>>>>>> 9fc4565e3103d9b44e0f372a1a1870ea91fe6981
    rating: {
      type: Number,
      default: 0,
    },
<<<<<<< HEAD
=======

>>>>>>> 9fc4565e3103d9b44e0f372a1a1870ea91fe6981
    status: {
      type: String,
      enum: ["Published", "Unpublished"],
      default: "Unpublished",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Testimonial", testimonialSchema);