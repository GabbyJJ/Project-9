const auth = require("basic-auth");
const bcrypt = require("bcryptjs");
const { Users } = require("../models");

//This will authenticate the user by email
exports.authenticateUser = (req, res, next) => {
  let message;
  const credentials = auth(req);
  console.log(credentials);
  if (credentials) {
    Users.findOne({
      where: { emailAddress: credentials.name },
    })
      .then((user) => {
        const authenticated = bcrypt.compareSync(
          credentials.pass,
          user.password
        );

        if (authenticated) {
          console.log(
            `Authentication successful for username: ${user.username}`
          );

          req.currentUser = user;
        } else {
          message = `Authentication failure for username: ${user.username}`;
        }
      })
      .catch((error) => {
        message = `User not found for username: ${credentials.name}`;
      });
  } else {
    message = "Auth header not found";
  }
  if (message) {
    console.warn(message);
    res.status(401).json({ message: "Access Denied" });
  } else {
    next();
  }
};
