const mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodedb"
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to database");
  // let query = `ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY`;
  // let query2 = `SELECT * FROM customers`;
  // let values = [
  //   ['Chirivico', 'Red village, Pikachu house']
  // ];
  connection.query(`SELECT * FROM customers WHERE name LIKE "%y" ORDER BY name DESC`, (err, result, fields) => {
    if (err) throw err;
    console.log(result)
  })
});