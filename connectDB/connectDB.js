
const mysql = require("mysql2");

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "travel",
};

const db = mysql.createConnection(dbConfig);

module.exports = db;
