const usercontroller = require("./resources");
const { models } = require("../../models/defination");
const studentservice = require("../../services/studentservice");
module.exports = {
  createStudent: async (req, res) => {
    const { firstName, lastName, email, phoneNUmbers, ...Student } = req.body;
    // console.log({firstName:firstName,lastNmae:lastName,email:email,phoneNUmber:phoneNUmber});
    const createuser = await usercontroller.createStudentHelper({
      firstName: firstName,
      lastNmae: lastName,
      email: email,
      phoneNUmbers: phoneNUmbers,
    });
    // console.log("pprintiing the returened createUser value:")
    // console.log(create.id);
    const createStudent = await studentservice.createstudent({
      userId: createuser.id,
      Department: Student.Department,
      semester: Student.semester,
      rollNo: Student.rollNo,
    });
    res.send(createStudent);
  },
};
