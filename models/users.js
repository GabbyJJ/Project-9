"use strict";
const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");
const models = require("./index");

module.exports = (sequelize) => {
  class Users extends Model {}
  Users.init({
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
  }),
    { sequelize, modelName: "Courses" };
  Users.associate = (models) => {
    Users.hasMany(models.Courses, { foreignKey: "UsersId" });
  };
  return Users;
};
