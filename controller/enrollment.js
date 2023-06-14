const Enrollment = require("../models/enrollment");

exports.getAllEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ courseId: req.params.id })
      .populate("userId", "name email avatar")
      .populate("courseId", "name")
      .exec();

    if (enrollments.length === 0)
      return res.status(200).json({ msg: "No enrollments found" });
    return res.status(200).json({ enrollments });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

exports.getEnrollmentById = async (req, res) => {
  try {
    const enrollment = await Enrollment.findById(req.params.id);
    if (!enrollment) {
      throw new Error("Enrollment not found");
    }
    if (enrollment.length === 0)
      return res.status(200).json({ msg: "No enrollments found" });
    return res.status(200).json({ enrollment });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

exports.createEnrollment = async (req, res) => {
  try {
    const isEnrolled = await Enrollment.findOne({
      courseId: req.body.courseId,
      userId: req.body.userId,
    });
    if (isEnrolled) {
      throw new Error("Already enrolled");
    }
    const enrollment = new Enrollment(req.body);
    await enrollment.save();
    return res.status(200).json({ msg: "Successfully Enrolled", enrollment });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

exports.updateEnrollment = async (req, res) => {
  try {
    const enrollment = await Enrollment.findById(req.params.id);
    if (!enrollment) {
      throw new Error("Enrollment not found");
    }
    const updates = Object.keys(req.body);
    const allowedUpdates = ["enrollmentStatus"];
    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );
    if (!isValidOperation) {
      throw new Error("Invalid updates");
    }
    updates.forEach((update) => (enrollment[update] = req.body[update]));
    await enrollment.save();
    return res
      .status(200)
      .json({ msg: "Enrollment Status successfully updated", enrollment });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

exports.deleteEnrollment = async (req, res) => {
  try {
    const enrollment = await Enrollment.findByIdAndDelete(req.params.id);
    if (!enrollment) {
      throw new Error("Enrollment not found");
    }
    return res.status(200).json({ msg: "Enrollment deleted successfully" });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

// get all my enrollments
exports.getMyEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ userId: req.params.id })
      .populate("courseId", "name category image")
      .exec();
    if (enrollments.length === 0)
      return res.status(200).json({ msg: "No enrollments found", enrollments });
    return res.status(200).json({ enrollments });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};
