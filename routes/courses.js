const { Router } = require("express");
const courses = require("../models/courses");
const course = require("../models/courses");
const user = require("../models/users");

router.get("/", (req, res) => {
  Course.findAll()
    .then((data) => res.status(200).json(data))
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

router.get("/courses/:id", (req, res) => {
  user.push(user);
  res.status(200).end();
}),
  router.post("/", (req, res) => {
    console.log(req.body);
    Courses.create(req.body)
      .then((course) => {
        res.send(201).end();
      })
      .catch((error) => {
        console.log(error);
        res.status(500);
        res.json(error).end();
      });
  }),
  router.put("/courses/:id", function (req, res, next) {
    Courses.findByPk(req.params.id)
      .then(function (course) {
        book
          .update(req.body)
          .then((course) => {
            res.send(201).end();
          })
          .catch((error) => {
            res.status(500);
            res.json(error).end();
          });
      })
      .catch((error) => {
        console.log("PK ERR: ", error);
        next();
      });
  });

router.delete("/courses/:id/delete", function (req, res, next) {
  Courses.findByPk(req.params.id).then((course) => {
    course.destroy();
    res.status(204).end();
  });
});

module.exports = router;
