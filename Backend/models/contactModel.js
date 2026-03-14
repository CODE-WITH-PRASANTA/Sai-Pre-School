const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    academyTitle: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
    },
    alternatePhone: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    address: {
      type: String,
      required: true,
    },
    facebook: String,
    instagram: String,
    linkedin: String,
    youtube: String,
    subscribeTitle: String,
    subscribeEmail: String,
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);