const Content = require("../models/content");

exports.createContent = async (req, res) => {
  try {
    const content = new Content(req.body);
    await content.save();
    res.status(201).json({ msg: "Content Successfully added",content });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
};

exports.getContentByCourseId = async (req, res) => {
  try {
    const content = await Content.find({ courseId: req.params.id });
    res.status(200).json({ content });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
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
    res.status(200).json({msg:"Content Successfully Updated", content });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
};

exports.deleteContent = async (req, res) => {
  try {
   const content = await Content.findByIdAndDelete(req.params.id);
    if (!content) {
      throw new Error("Content not found");
    }
    res.status(200).json({msg: "Content Successfully Deleted", content });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
};
