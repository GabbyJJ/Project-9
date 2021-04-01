const { Router } = require("express");
const { UniqueConstraintError } = require("sequelize");

const user = require("../models/user");

Router.get("/users", (req, res) => {
  res.status(200).end();

  //Validates there is a First name value.
  if (!user.firstName) {
    errors.push('Please provide a value for "Firstname" ').res.status(400);
  }
  //Validates there is a Last name value.
  if (!user.lastName) {
    errors.push('Please provide a value for "Lastname" ').res.status(400);
  }
  //Validates there is a Email Address value.
  if (!user.emailAddress) {
    errors.push('Please provide a value for "Email Address" ').res.status(400);
  }
  //Validates there is a Password value.
  if (!user.password) {
    errors.push('Please provide a value for "Password" ').res.status(400);
  }
  if (errors.length > 0) {
    res.status(400).json({ errors });
  } else {
    //Add user to `users` array.
    user.push(user);
    //Set status to 201 and created end response.
    res.status(201).location = "/".end();
  }
});
