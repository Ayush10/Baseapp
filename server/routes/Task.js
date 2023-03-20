const express = require("express");
const {
  postTask,
  getTasks,
  getTaskByProjectId,
  getTaskById,
  deleteTask,
  putTask,
} = require("../controllers/Task");

const { validateToken } = require("../middlewares/AuthMiddleware");

const router = express.Router();

router
  .route("/")
  .get(validateToken, getTasks)
  .post(validateToken, postTask)
  .put(validateToken, putTask)

router
  .route("/:id")
  .get(validateToken, getTaskById)
  .delete(validateToken, deleteTask);

router.route("/project/:projectId").get(validateToken, getTaskByProjectId);

module.exports = router;
