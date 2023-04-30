const mongoose = require('mongoose');

const enrollmentSchema = require('../schemas/enrollment');

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

module.exports = Enrollment;