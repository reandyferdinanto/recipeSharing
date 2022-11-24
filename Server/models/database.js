require("dotenv").config();
const mysql = require("mysql2");

const connection = mysql.createConnection(
  'mysql://srsfue0pod18mw638trg:pscale_pw_BCD5rUWqkosWUb7IGNokYajVRxlx6dSnGTFxUpd3X3b@us-east.connect.psdb.cloud/recipe-sharing--app?ssl={"rejectUnauthorized":true}'
);
console.log("Connected to PlanetScale!");
// connection.end();

module.exports = connection;
