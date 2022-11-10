const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "recipeSharing",
  password: "recipePassword",
  database: "recipesharing",
});

module.exports = pool;
