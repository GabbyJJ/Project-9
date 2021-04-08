const { router } = require("express");
const bcrypt = require("bcryptjs");
const { UniqueConstraintError } = require("sequelize");
const { User } = require("../models");

Router.get("/", (req, res) => {
  User.findAll()
    .then((users) => {
      // res.status(200);
      res.json(users).end();
    })
    .catch(error.res.status(200));
});

Router.post("/", (req, res) => {
  const user = req.body;
  console.log(user);

  User.create({
    firstName: user.firstName,
    lastName: user.lastName,
    emailAddress: user.emailAddress,
    password: bcrypt.hashSync(user.password, 8),
  })
    .then((user) => {
      res.status(201).location("/");
      res.end();
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json(error);
      res.end();
    });
});
module.exports = router;
