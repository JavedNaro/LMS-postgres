var express = require("express");
const {
  createCourseTeacher,
  getTeachersOfCourse,
} = require("../controller/resources/course-teacher");

var router = express.Router();

/* GET users listing. */
router.post("/course_teacher", createCourseTeacher);
router.get("/course/:courseID/teachers", getTeachersOfCourse);

module.exports = router;