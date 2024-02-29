const { registerUser, loginUser } = require("../controllers/authController")
const catchAsync = require("../services/catchAsync")

const router = require("express").Router()

router.route("/register").post(catchAsync(registerUser))
router.route("/login").post(catchAsync(loginUser))


module.exports = router 