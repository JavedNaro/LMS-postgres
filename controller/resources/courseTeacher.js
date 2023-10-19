const courseTeacherService = require("../../services/courseTeacher");

module.exports = {
  createCourseTeacher: async (req, res) => {
    const result = await courseTeacherService.createCourseTeacher(req.body);
    res.json(result);
  },
  getTeachersOfCourse: async (req, res) => {
    const { courseID } = req.params;
    const result = await courseTeacherService.getTeachersOfCourse(courseID);
    res.json(result);
  },
};