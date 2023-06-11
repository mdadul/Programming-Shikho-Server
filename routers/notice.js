const express = require("express");
const router = new express.Router();
const noticeController = require("../controller/notice");
const auth = require("../middlewares/auth");
const role = require("../middlewares/roles");
const { ROLES } = require("../constants");

// Getting all notices by courseId

router.get("/course/:id", noticeController.getNoticeByCourseId);

// create notice

router.post(
  "/",
  auth,
  role.check(ROLES.ADMIN, ROLES.TEACHER),
  noticeController.createNotice
);

// update notice

router.put(
  "/:id",
  auth,
  role.check(ROLES.ADMIN, ROLES.TEACHER),
  noticeController.updateNotice
);

// delete notice

router.delete(
  "/:id",
  auth,
  role.check(ROLES.ADMIN, ROLES.TEACHER),
  noticeController.deleteNotice
);

// get notice by id

router.get("/:id", auth, noticeController.getNoticeById);


module.exports = router;