const express = require("express");
const fileUpload = require("express-fileupload");
const routes = require("./server/routes/recipeRoutes");
const pools = require("./Server/models/database");
const app = express();
const port = process.env.PORT || 3000;

require("dotenv").config();

app.use(express.json());
app.use(express.static("public"));

app.use("/", routes);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("listening to port", port);
});

pools.getConnection((err) => {
  if (!err) console.log("DB Connection succeded");
  else console.log("DB Connection failed ");
});
