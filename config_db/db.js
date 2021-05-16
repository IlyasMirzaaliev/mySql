const mysql = require("mysql");
// const sql = config.get('Users')

const connection = mysql.createConnection({
  host: "10.154.66.5",
  user: "root",
  database: "mydb2",
  password: "password",
});

connection.connect((error) => {
  if (error) {
    return console.error("ошибка: " + error.message);
  } else {
    console.log("connected to DB");
  }
});

module.exports = connection;
