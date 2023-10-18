const dataTypes = require("sequelize");
let sequelize = require("../../common/dbconnection");
const student = sequelize.define(
  "student",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER,
    },
    Department:{
      type: dataTypes.STRING
    },
    rollNo:{
      allowNull: false,
      type: dataTypes.STRING,

    },
    semester:{
      type: dataTypes.STRING,
    allowNull: false
    }

  });
module.exports = student;
