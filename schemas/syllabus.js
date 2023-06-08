const mongoose = require("mongoose");

const syllabusSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  weekNumber: {
    type: Number,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = syllabusSchema;
