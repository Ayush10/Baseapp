const express = require("express");
const {
  getMember,
  getMembers,
  postMember,
  getMemberByProjectId, deleteMember,
} = require("../controllers/Member");

const { validateToken } = require("../middlewares/AuthMiddleware");

const router = express.Router();

router
  .route("/")
  .get(validateToken, getMembers)
  .post(validateToken, postMember);


router.route("/:id").get(validateToken, getMember).delete(validateToken, deleteMember);

router.route("/project/:projectId").get(validateToken, getMemberByProjectId);

module.exports = router;
