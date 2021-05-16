const User = require("../models/customers.model.js");

/*Create User*/
exports.create = (req, res) => {
  console.log(req);
  if (!req.body) {
    res.status(400).send({
      message: "Content are empty",
    });
  }
  const user = new User({
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    email: req.body.email,
  });

  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer.",
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  User.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.send(data);
    }
  });
};

exports.findById = (req, res) => {
  User.getOne(req.params.userId, (err, data) => {
    // console.log(req.params.userId)
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `User with id ${req.params.userId} not found.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving User with id " + req.params.userId,
        });
      }
    } else res.send(data);
  });
};

//Delete by ID
exports.deleteById = (req, res) => {
  User.deleteOne(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.params.userId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving User with id " + req.params.userId,
        });
      }
    } else res.send(data);
  });
};
