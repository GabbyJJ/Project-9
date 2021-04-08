"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Course extends Model {}
  Course.init({
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: "",
    },
    estimatedTime: {
      type: DataTypes.STRING,
    },
    materialsNeeded: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.NUMBER,
    },
    sequelize,
    modelName: "Course",
  });
  Course.associate = (models) => {
    Course.belongsTo(models.Courses, { foreignKey: "userId" });
  };
  return Courses;
};
