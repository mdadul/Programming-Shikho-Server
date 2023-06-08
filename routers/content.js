const express = require("express");
const router = express.Router();
const contentController = require("../controller/content");
const {ROLES} = require("../constants");
const role = require("../middlewares/roles");

router.post("/", role.check(ROLES.ADMIN), contentController.createContent);

router.get("/", contentController.getContent);

router.get("/:id", contentController.getContentById);

router.put("/:id", role.check(ROLES.ADMIN), contentController.updateContent);

router.delete("/:id", role.check(ROLES.ADMIN), contentController.deleteContent);

module.exports = router;
