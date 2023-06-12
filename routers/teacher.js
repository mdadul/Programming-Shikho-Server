const express = require("express");
const router = express.Router();
const teacherController = require("../controller/teacher");
const { ROLES } = require("../constants");
const role = require("../middlewares/roles");
const auth = require("../middlewares/auth");

// get all teachers for a course
router.get("/course/:id", teacherController.getAllTeachers);

// assign a teacher to a course
router.post(
  "/",
  auth,
  role.check(ROLES.ADMIN),
  teacherController.assignTeacher
);

// delete a teacher from a course
router.delete(
  "/:id",
  auth,
  role.check(ROLES.ADMIN),
  teacherController.deleteTeacher
);

module.exports = router;