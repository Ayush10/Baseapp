const express = require("express");

const { validateToken } = require("../middlewares/AuthMiddleware");
const {getComponent, postComponent, putComponent, getComponentById, deleteComponent, getComponentByProjectId} = require("../controllers/Component");

const router = express.Router();

router
    .route("/")
    .get(validateToken, getComponent)
    .post(validateToken, postComponent)
    .put(validateToken, putComponent);

router
    .route("/:id")
    .get(validateToken, getComponentById)
    .delete(validateToken, deleteComponent);

router.route("/project/:projectId").get(validateToken, getComponentByProjectId);

module.exports = router;
