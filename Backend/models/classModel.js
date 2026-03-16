const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
{
  className: {
    type: String,
    required: true,
  },

  classTime: {
    type: String,
    required: true,
  },

  classSize: {
    type: String,
    required: true,
  },

  yearsOld: {
    type: String,
    required: true,
  },

  tuitionFees: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    default: "",
  },

  image: {
    type: String,
    default: "",
  }

},
{ timestamps: true }
);

module.exports = mongoose.model("Class", classSchema);