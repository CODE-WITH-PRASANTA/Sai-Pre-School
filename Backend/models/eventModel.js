const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
{
  title: String,
  image: String,
  location: String,
  date: String,
  description: String
},
{ timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);