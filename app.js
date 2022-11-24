const express = require("express");
// const fileUpload = require("express-fileupload");
const routes = require("./Server/routes/recipeRoutes");
// const pools = require("./Server/models/database");
const connection = require("./Server/models/database");
const app = express();
const port = 8080;
const mysql = require("mysql2");

require("dotenv").config();

app.use(express.json());
// app.use(express.static("public"));

app.use("/", routes);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("listening to port", port);
});

connection.connect((err) => {
  if (!err) console.log("DB Connection succeded");
  else console.log("DB Connection failed ");
});
