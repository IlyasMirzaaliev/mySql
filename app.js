const express = require("express");
const config = require("config");
const app = express();
const PORT = config.get("port");
const bodyParsel = require("body-parser");
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("dev"));

app.use(bodyParsel.json());
app.use(bodyParsel.urlencoded({ extended: true }));
require("./Routes/customer.routes.js")(app);

const appStart = () => {
  app.listen(PORT, () => {
    try {
      console.log(`Server has been started on port ${PORT}`);
    } catch (error) {
      console.log(error);
    }
  });
};

appStart();
