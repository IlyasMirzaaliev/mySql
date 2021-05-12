const sql = require("../config_db/db.js");

const User = (user) => {
//   this.id = user.id;
//   this.email = user.email;
//   this.firstname = user.firstname;
//   this.lastname = user.lastname;
};

User.getAll = (result) => {
  sql.query("SELECT * FROM users", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Users: ", res);
    result(null, res);
  });
};

module.exports = User;
