const Content = require("../models/content");

exports.createContent = async (req, res) => {
  try {
    const content = new Content(req.body);
    await content.save();
    return res.status(201).json({ msg: "Content Successfully added", content });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.getContentByCourseId = async (req, res) => {
  try {
    const content = await Content.find({ courseId: req.params.id });
    console.log(content);
    return res.status(200).json({ content });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.updateContent = async (req, res) => {
  try {
    const content = await Content.findOne(req.params.id);
    if (!content) {
      throw new Error("Content not found");
    }
    Object.keys(req.body).forEach((key) => {
      content[key] = req.body[key];
    });
    await content.save();
    return res
      .status(200)
      .json({ msg: "Content Successfully Updated", content });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.deleteContent = async (req, res) => {
  try {
    const content = await Content.findByIdAndDelete(req.params.id);
    if (!content) {
      throw new Error("Content not found");
    }
    return res
      .status(200)
      .json({ msg: "Content Successfully Deleted", content });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
