const mongoose = require("mongoose");

const classesSchema = new mongoose.Schema(
  {
    className: {
      type: String,
      required: true,
      trim: true,
    },
    classTime: {
      type: String,
      required: true,
    },
    classSize: {
      type: Number,
      required: true,
    },
    yearsOld: {
      type: String,
      required: true,
    },
    tuitionFees: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Classes", classesSchema);