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
    sequelize,
    modelName: "Course",
  });
  Course.associate = (models) => {
    Course.belongsTo(models.Course, { foreignKey: "userId" });
  };
  return Course;
};
