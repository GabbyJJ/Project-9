const { Router } = require("express");
const course = require("../models/course");

router.get("/courses", (req, res) => {
  res.json(users);
  user.push(user);
  res.status(200).end();
});

router.get("/courses/:id", (req, res) => {
  course.findAll().then((courses) => {
    if (course.length) {
      res.render("course", { course });
    } else {
      res.status(200).end();
    }
  });
});

router.post("/courses", (req, res) => {
  const courses = req.body;
  location.header = "api/courses";
  if (!course.title) {
    errors.push('Please provide a value for "Title" ');
  }
  if (!course.description) {
    errors.push('Please provide a value for "Description" ');
  } else {
    res.status(200).end();
  }
});

router.put("/courses/:id", (req, res) => {
  if (!course.title) {
    errors.push('Please provide a value for "Title" ');
  }
  if (!course.description) {
    errors.push('Please provide a value for "Description" ');
  } else {
    res.status(200).end();
  }
});

router.delete("/courses/:id/delete", (req, res) => {
  course.findByPk(req.params.id).then((course) => {
    course.destroy().res.status(204).end();
  });
});
