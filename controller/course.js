const Course = require("../models/course");

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    if(courses.length === 0) res.status(200).json({ msg: "No courses found" });
    res.status(200).json({ courses });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      throw new Error("Course not found");
    }
    if(course.length === 0) res.status(200).json({ msg: "No courses found" });
    else res.status(200).json({ course });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.createCourse = async (req, res) => {
 try{
  console.log(req.body)
  const course = new Course(req.body);
  await course.save();
  res.status(201).json({ course });
 }
  catch(error){
    res.status(400).json({ msg: error.message });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      throw new Error("Course not found");
    }
    const updates = Object.keys(req.body);
    updates.forEach((update) => (course[update] = req.body[update]));
    await course.save();
    res.status(200).json({ course });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id);
        if (!course) {
            throw new Error("Course not found");
        }
        res.status(200).json({ msg: "Course deleted successfully" });

    } catch (error) {
        res.status(400).json({ msg: error.message });        
    }
};

exports.myCourses = async (req, res) => {
    try {
        const courses = await Course.find({ courseTeacherId: req.user._id });
        res.status(200).json({ courses });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

