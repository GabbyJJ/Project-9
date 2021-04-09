"use strict";
const { Model, DataTypes } = require("sequelize");
const models = require("./index");

module.exports = (sequelize) => {
  class Courses extends Model {}
  Courses.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Title can not be empty",
        },
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Description can not be empty",
        },
      },
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
  }),
    { sequelize, modelName: "Courses" };

  Courses.associate = (models) => {
    Courses.belongsTo(models.Users, { foreignKey: "userId" });
  };
  return Courses;
};
