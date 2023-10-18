const { DataTypes } = require("sequelize");
let sequelize = require("../common/dbconnection");
  const courses = sequelize.define(
    "courses",
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      English:{
        allownull:false,
        type: DataTypes.INTEGER,
      },
      Urdu:{
        allownull:false,
        type: DataTypes.INTEGER,
      },
      Math:{
        allownull:false,
        type: DataTypes.INTEGER,
      }
    });
  module.exports = courses;
  