"use strict";

// load modules
const express = require("express");
const morgan = require("morgan");
const { sequelize } = require("./models/index");
const courseRouter = require("./routes/courses");
const userRouter = require("./routes/user");

// variable to enable global error logging
const enableGlobalErrorLogging =
  process.env.ENABLE_GLOBAL_ERROR_LOGGING === "true";

// create the Express app
const app = express();
app.disable("etag");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// setup morgan which gives us http request logging
app.use(morgan("dev"));

// setup a friendly greeting for the root route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the REST API project!",
  });
});
app.use("/api/users", userRouter);
app.use("/api/courses", courseRouter);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", err);
  });
sequelize
  .sync({ force: false })
  .then(() => {
    console.log(`Databases have synced`);
  })
  .catch((error) => {
    console.log(`There was an error syncing the database: ${error}`);
  });
// this will send a 404 message if no other route matched
app.use((req, res) => {
  res.status(404).json({
    message: "Route Not Found",
  });
});

// This will setup a global error handler
app.use((err, req, res, next) => {
  if (enableGlobalErrorLogging) {
    console.error(`Global error handler: ${JSON.stringify(err.stack)}`);
  }

  res.status(err.status || 500).json({
    message: err.message,
    error: {},
  });
});

// set the port
app.set("port", process.env.PORT || 5000);

// start listening on the port
const server = app.listen(app.get("port"), () => {
  console.log(`Express server is listening on port ${server.address().port}`);
});
