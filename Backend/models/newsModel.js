const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
{
  title: String,
  image: String,
  description: String,
  author: String,
  date: String,
},
{ timestamps: true }
);

module.exports = mongoose.model("News", newsSchema);