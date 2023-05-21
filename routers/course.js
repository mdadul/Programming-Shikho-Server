const express = require("express");
const courseController = require("../controller/course");
const auth = require("../middlewares/auth");
const role = require("../middlewares/roles");
const { ROLES } = require("../constants");
const router = new express.Router();

// Getting all courses
router.get("/", courseController.getAllCourses);

// Getting a course by id
router.get("/:id", courseController.getCourseById);

// Creating a course
router.post("/", auth, role.check(ROLES.ADMIN, ROLES.STUDENT), courseController.createCourse);

// Updating a course
router.put("/:id", auth, role.check(ROLES.ADMIN), courseController.updateCourse);

// Deleting a course
router.delete("/:id", auth, role.check(ROLES.ADMIN), courseController.deleteCourse);

module.exports = router;