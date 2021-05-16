const sql = require("../config_db/db.js");

const User = function(user) {
  this.fistName = user.fistName;
  this.lastName = user.lastName;
  this.email = user.email;
};

User.create = (newUser, result) => {
  sql.query(`INSERT INTO myTable SET ?`, newUser, (err, res) => {
    if (err) {
      console.log(`ОШИБКА СОЗДАНИЯ + ${err}`);
      result(err, null);
    }
    console.log("Пользователь создан: ", { UserId: res.InsertId, ...newUser });
    result(null, { UserId: res.InsertId, ...newUser });
  });
};

User.getAll = (result) => {
  sql.query("SELECT * FROM myTable", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Users on the POSTMAN or Chrome: ");
    result(null, res);
  });
};

User.getOne = (userID, result) => {
  sql.query(`SELECT * FROM myTable WHERE userID = ${userID}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.length) {
      // console.log("found user: ", res[0]);
      result(null, res[0]);
      return;
    }
    result({ kind: "not_found" }, null);
  });
};

User.deleteOne = (userID, result) => {
  sql.query(`DELETE  FROM myTable WHERE userID = ${userID}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows === 0) {
      result({ kind: "not_found " }, null);
      return;
    }
    // res.send("deleted customer with id: ", userID);
    result(null, res);
    return;
  });
};

module.exports = User;
