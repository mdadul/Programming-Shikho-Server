const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  contentTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  contentUrl: {
    type: String,
    required: true,
  },
  contentDuration: {
    type: String,
    required: true,
  },
 
});

module.exports = contentSchema;
