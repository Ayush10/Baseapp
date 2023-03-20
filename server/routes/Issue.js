const express = require("express");

const { validateToken } = require("../middlewares/AuthMiddleware");
const {getIssues, postIssue, putIssue, getIssuesById, deleteIssue, getIssuesByProjectId} = require("../controllers/Issue");

const router = express.Router();

router
    .route("/")
    .get(validateToken, getIssues)
    .post(validateToken, postIssue)
    .put(validateToken, putIssue);

router
    .route("/:id")
    .get(validateToken, getIssuesById)
    .delete(validateToken, deleteIssue);

router.route("/project/:projectId").get(validateToken, getIssuesByProjectId);

module.exports = router;
