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

router.post("/", (req, res) => {
  const user = req.body;

  Users.create(req.body)
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
