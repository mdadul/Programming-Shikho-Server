const Notice = require("../models/notice");

exports.createNotice = async (req, res) => {
  try {
    const notice = new Notice(req.body);
    await notice.save();
    return res.status(201).json({ msg: "Notice Successfully added", notice });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.getNoticeByCourseId = async (req, res) => {
  try {
    const notice = await Notice.find({ courseId: req.params.id });
    return res.status(200).json({ notice });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.updateNotice = async (req, res) => {
  try {
    const notice = await Notice.findById(req.params.id);
    if (!notice) {
      throw new Error("Notice not found");
    }
    const updates = Object.keys(req.body);
    updates.forEach((update) => (notice[update] = req.body[update]));
    await notice.save();
    return res.status(200).json({ msg: "Notice updated successfully", notice });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.deleteNotice = async (req, res) => {
  try {
    const notice = await Notice.findByIdAndDelete(req.params.id);
    if (!notice) {
      throw new Error("Notice not found");
    }
    return res.status(200).json({ msg: "Notice deleted successfully", notice });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.getNoticeById = async (req, res) => {
  try {
    const notice = await Notice.findById(req.params.id);
    return res.status(200).json({ notice });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
