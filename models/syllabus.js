const mongoose = require("mongoose");

const syllabusSchema = require("../schemas/syllabus");

const Syllabus = mongoose.model("Syllabus", syllabusSchema);

module.exports = Syllabus;