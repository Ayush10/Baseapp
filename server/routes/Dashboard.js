const express = require("express");

const { validateToken } = require("../middlewares/AuthMiddleware");
const {getDashboard} = require("../controllers/Dashboard");

const router = express.Router();

router
    .route("/:id")
    .get(validateToken, getDashboard);

module.exports = router;
