const express = require("express");

const { validateToken } = require("../middlewares/AuthMiddleware");
const {getSubTasks, postSubTask, putSubTask, getSubTaskById, deleteSubTask, getSubTaskByTaskId} = require("../controllers/SubTask");

const router = express.Router();

router
    .route("/")
    .get(validateToken, getSubTasks)
    .post(validateToken, postSubTask)
    .put(validateToken, putSubTask)

router
    .route("/:id")
    .get(validateToken, getSubTaskById)
    .delete(validateToken, deleteSubTask);

router.route("/task/:taskId").get(validateToken, getSubTaskByTaskId);

module.exports = router;
