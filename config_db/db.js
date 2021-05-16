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
  // const table =
  //   "CREATE TABLE  if NOT EXISTS myTable ( `id` INT NOT NULL AUTO_INCREMENT , `fisrt_name` VARCHAR(255) NOT NULL , `last_name` VARCHAR(255) NOT NULL , `email` VARCHAR(255) NOT NULL , `commit` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`), UNIQUE `email` (`email`(32))) ENGINE = InnoDB;";
  // connection.query(table, (err, result) => {
  //   if (err) {
  //     console.log("Ошибка создания: ", err);
  //   } else {
  //     console.log("Table Created", result);
  // connection.end();
  //   }
  // });
});

// console.log(connection);

module.exports = connection;
