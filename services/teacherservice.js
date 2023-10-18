const { models } = require("../models/defination");
const { Op } = require("sequelize");
// const course = require("../models/definations/user/courses");

module.exports = {
  getTeachers: async () => {
    const result = await models.teacher.findAll();
    // result.forEach((data) => console.log(data.toJSON()));
    return result;
  },
  createTeacher: async (data) => {
    const result = await models.teacher.create(data);
    return result;
  },

};
