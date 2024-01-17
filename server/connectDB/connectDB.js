
const mysql = require("mysql2");
const dotenv = require("dotenv");

// Đọc các biến môi trường từ tệp .env
dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST ,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD ,
  database: process.env.DB_DATABASE ,
};

const db = mysql.createConnection(dbConfig);

module.exports = db;
