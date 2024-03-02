const { addCourse, addCourseChapter, addCourseCategory } = require("../controllers/admin/courseController")
const { isAuthenticated } = require("../middleware/isAuthenticated")
const restrictTo = require("../middleware/restrictTo")
const catchAsync = require("../services/catchAsync")

const router = require("express").Router()

router.route("/course").post(isAuthenticated, catchAsync(restrictTo('admin')), catchAsync(addCourse))
router.route("/chapter").post(catchAsync(isAuthenticated, catchAsync(restrictTo('admin')),addCourseChapter))
router.route("/category").post(catchAsync(isAuthenticated, catchAsync(restrictTo('admin')), addCourseCategory))


module.exports = router 