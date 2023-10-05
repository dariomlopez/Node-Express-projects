import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "loginDatabase"
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to database")

  connection.query(`CREATE DATABASE [IF NOT EXIST] loginDatabase`)
})