const express = require("express");
const router = express.Router();
const { Users, Courses } = require("../models");
const { authenticateUser } = require("../middleware/auth-user");

router.get("/", authenticateUser, (req, res, next) => {
  Users.findAll({
    include: [
      {
        model: Courses,
      },
    ],
  })
    .then((users) => {
      // res.status(200);
      res.json(users).end();
    })
    .catch((error) => {
      res.status(500);
      res.json(error).end();
    });
});

Router.post("/", (req, res) => {
  const user = req.body;

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
