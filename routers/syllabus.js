const express = require("express");
const router = express.Router();
const syllabusController = require("../controller/syllabus");
const {ROLES} = require("../constants");
const role = require("../middlewares/roles");

router.post("/", role.check(ROLES.ADMIN), syllabusController.createSyllabus);

router.put("/:id", role.check(ROLES.ADMIN), syllabusController.updateSyllabus);

router.delete("/:id", role.check(ROLES.ADMIN), syllabusController.deleteSyllabus);

router.get("/:id", syllabusController.getSyllabusByCourseId);

module.exports = router;