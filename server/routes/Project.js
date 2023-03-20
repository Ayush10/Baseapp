const express = require("express");
const {
  getProjects,
  getProject,
  postProject,
  deleteProject,
  getProjectByUserId, putProject,
} = require("../controllers/Project");
const { validateToken } = require("../middlewares/AuthMiddleware");

const router = express.Router();

router
  .route("/")
  .get(validateToken, getProjects)
  .post(validateToken, postProject)
    .put(validateToken, putProject);

router
  .route("/:id")
  .get(validateToken, getProject)
  .delete(validateToken, deleteProject);

router.route("/user/:userId").get(validateToken, getProjectByUserId);

module.exports = router;
