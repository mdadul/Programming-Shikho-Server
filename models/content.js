const mongoose = require("mongoose");

const contentSchma = require("../schemas/content");

const Content = mongoose.model("Content", contentSchma);

module.exports = Content;