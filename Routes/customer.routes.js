module.exports = (app) => {
  const user = require("../Controllers/customer.controller.js");

  app.post("/api/users/", user.create);

  app.get("/api/users", user.findAll);
  app.get("/api/users/:userId", user.findById);
  app.delete("/api/users/:userId", user.deleteById);

  app.use((req, res, next) => {
    if (req.url == "/") {
      res.json({ message: "Welcome to the Main Page." });
    } else {
      next();
    }
  });

  app.use((req, res, next) => {
    if (req.url == "/api") {
      res.json({ message: "Welcome to the API." });
    } else {
      next();
    }
  });

  // app.use((req, res) => {
  //   res.send(404, "Page not Found");
  // });
};
