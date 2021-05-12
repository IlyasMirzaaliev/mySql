const express = require("express");
const config = require("config");
const app = express();
const PORT = config.get("port");

app.use(express.json());
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
