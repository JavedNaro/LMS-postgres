const express = require("express");
const {
  getCourses,
  updateCourse,
  deleteCourse,
  addCourse,
} = require("../controller/resources/course/coursecontroller");
var router = express.Router();

router.get("/", getCourses);
router.post("/addCourse", addCourse);
router.put("/updateCourse/:id", updateCourse);
router.delete("/deleteCourse/:id", deleteCourse);

module.exports = router;
