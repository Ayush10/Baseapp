const express = require("express");
const {
  registerUser,
  loginUser,
  getUser,
  forgetPassword,
  resetPassword,
} = require("../controllers/Authentication");

const router = express.Router();

router.route("/").get(getUser);

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/forgotPassword/:username").post(forgetPassword);

router.route("/resetPassword/:id").put(resetPassword);

module.exports = router;
