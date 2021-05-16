const sql = require("../config_db/db.js");

const User = function (user) {
  this.firstName = user.firstName;
  this.lastName = user.lastName;
  this.email = user.email;
};

User.create = (newUser, result) => {
  sql.query(`INSERT INTO myTable SET ?`, newUser, (err, res) => {
    if (err) {
      console.log(`ОШИБКА СОЗДАНИЯ  `);
      result(err, null);
    } else {
      console.log("Пользователь создан: ");
      result(null, res);
    }
  });
};

User.getAll = (result) => {
  const allUsers = "SELECT * FROM myTable";
  sql.query(allUsers, (err, res) => {
    if (err) {
      // console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`Users on the POSTMAN or Chrome: `);
    result(null, res);
  });
};

User.getOne = (userID, result) => {
  const getById = `SELECT * FROM myTable WHERE userID = ${userID}`;
  sql.query(getById, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.length) {
      // console.log(`User on the POSTMAN or Chrome: ID=${userID} `);
      result(null, res[0]);
      return;
    }
    result({ kind: "not_found" }, null);
  });
};

User.deleteOne = (userID, result) => {
  const deleteById = `DELETE  FROM myTable WHERE userID = ${userID}`;
  sql.query(deleteById, (err, res) => {
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
