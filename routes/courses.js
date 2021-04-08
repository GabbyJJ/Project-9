const express = require("express");
const router = express.Router();
const { Courses, Users } = require("../models");
const { authenticateUser } = require("../middleware/auth-user");

router.get("/", (req, res) => {
  Course.findAll({
    include: [
      {
        model: Users,
      },
    ],
  })
    .then((data) => res.status(200).json(data))
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

router.get("/:id", (req, res) => {
  Courses.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: Users,
      },
    ],
  })
    .then((course) => {
      res.status(200).json(course).end();
    })
    .catch((error) => {
      console.log(error);
      res.status(500);
      res.json(error).end();
    });
});
router.post("/", authenticateUser, (req, res) => {
  console.log(req.body);
  Courses.create(req.body)
    .then((course) => {
      res.status(201).json(course).end();
    })
    .catch((error) => {
      console.log(error);
      res.status(500);
      res.json(error).end();
    });
});

router.put("/:id", authenticateUser, function (req, res, next) {
  Courses.findByPk(req.params.id)
    .then(function (course) {
      course
        .update(req.body)

        .then((course) => {
          res.status(201).json(course).end();
        })
        .catch((error) => {
          res.status(500);
          res.json(error).end();
        });
    })
    .catch((error) => {
      res.status(500);
      res.json(error).end();
    });
});

//delete course
router.delete("/:id", authenticateUser, function (req, res, next) {
  Courses.findByPk(req.params.id)
    .then((course) => {
      course.destroy();
      res.status(204).end();
    })
    .catch((error) => {
      res.status(500);
      res.json(error).end();
    });
});

module.exports = router;
