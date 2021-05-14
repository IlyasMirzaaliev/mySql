module.exports = (app) => {
  const user = require("../Controllers/customer.controller.js");
  app.get("/api/users", user.findAll);

  app.use((req, res, next) => {
    if (req.url == "/") {
      res.json({ message: "Welcome to the Main Page." });
    } else {
      next();
    }
  });

  app.use((req, res, next) => {
    if (req.url == "/api") {
      res.json({ message: "Welcome to the application." });
    } else {
      next();
    }
  });

  app.use((req, res) => {
    res.send(404, "Page not Found");
  });
};
