module.exports = app => {
  const user = require('../Controllers/customer.controller.js');
  app.get("/users", user.findAll);

  app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });
};
