const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  fee: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    default: "https://via.placeholder.com/150",
  },
  category: {
    type: String,
    default: "Uncategorized",
    required: true,
  }
});

module.exports = courseSchema;
