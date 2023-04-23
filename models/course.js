const mongoose = require('mongoose');
const courseSchema = require('../schemas/course');

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;