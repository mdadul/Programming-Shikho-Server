const mongoose = require('mongoose');
const noticeSchema = require('../schemas/notice');

const Notice = mongoose.model('Notice', noticeSchema);

module.exports = Notice;
