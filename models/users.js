"use strict";
const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");
const models = require("./index");

module.exports = (sequelize) => {
  class User extends Model {}
  User.init({
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    emailAddress: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    sequelize,
    modelName: "User",
  });
  User.associations = (models) => {
    User.hasMany(madels.Courses, { foreignKey: "userId" });
  };
  return User;
};
