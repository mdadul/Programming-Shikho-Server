const express = require("express");
const router = express.Router();
const syllabusController = require("../controller/syllabus");
const { ROLES } = require("../constants");
const auth = require("../middlewares/auth");
const role = require("../middlewares/roles");

router.post(
  "/",
  auth,
  role.check(ROLES.ADMIN, ROLES.TEACHER),
  syllabusController.createSyllabus
);

router.put(
  "/:id",
  auth,
  role.check(ROLES.ADMIN, ROLES.TEACHER),
  syllabusController.updateSyllabus
);

router.delete(
  "/:id",
  auth,
  role.check(ROLES.ADMIN, ROLES.TEACHER),
  syllabusController.deleteSyllabus
);

router.get("/:id", syllabusController.getSyllabusByCourseId);

module.exports = router;
