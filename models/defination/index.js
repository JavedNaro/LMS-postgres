let sequelize = require("../../common/dbconnection");
let user = require("../user/users");
let student = require("../user/student");
let teacher = require("../user/teacher");
let courses = require("../courses")

user.hasOne(student, {
  onDelete: "CASCADE",
  foreignkey: { name: "userID", allowNull: false, unique: true },
});
student.belongsTo(user, {
  onDelete: "CASCADE",
  foreignkey: { name: "userID", allowNull: false, unique: true },
});
teacher.belongsTo(user, {
  onDelete: "CASCADE",
  foreignkey: { name: "userID", allowNull: false, unique: true },
});
courses.belongsToMany(teacher,{
  onDELETE: "CASCADE",
  through : "Teachercourse",
  as : "teacher"
})

const models = sequelize.models;
console.log(models);
const db = {};
db.sequelize = sequelize;
module.exports = { db, models };
