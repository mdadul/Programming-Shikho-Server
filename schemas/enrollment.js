const mongoose = require("mongoose");
const { COURSE_STATUS } = require("../constants");

const enrollmentSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  enrollmentDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  enrollmentStatus: {
    type: String,
    enum: [
      COURSE_STATUS.PENDING,
      COURSE_STATUS.APPROVED,
      COURSE_STATUS.REJECTED,
    ],
    default: COURSE_STATUS.PENDING,
    required: true,
  },
});

module.exports = enrollmentSchema;
