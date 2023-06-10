const express = require("express");
const router = express.Router();
const contentController = require("../controller/content");
const { ROLES } = require("../constants");
const role = require("../middlewares/roles");
const auth = require("../middlewares/auth");

router.post("/",auth, role.check(ROLES.ADMIN, ROLES.TEACHER), contentController.createContent);

router.get("/:id",auth, contentController.getContentByCourseId);

router.put("/:id",auth, role.check(ROLES.ADMIN, ROLES.TEACHER), contentController.updateContent);

router.delete("/:id",auth, role.check(ROLES.ADMIN,ROLES.TEACHER), contentController.deleteContent);

module.exports = router;
