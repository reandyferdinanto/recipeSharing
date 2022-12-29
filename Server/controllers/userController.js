const connection = require("../models/database");
const { body, validationResult } = require("express-validator");
const session = require("express-session");
const jwt = require("jsonwebtoken");

exports.register = (req, res) => {
  if (req.body.userName != "" && req.body.password != "") {
    const { userName, password, email } = req.body;
    const selectSql = `SELECT userName FROM users WHERE userName = "${userName}"`;
    const selects = connection.query(selectSql, (err, result) => {
      console.log(result);
      if (result && result.length >= 1) {
        return res.status(400).json({
          message: `username already registered`,
        });
      } else {
        const registersSql = `INSERT INTO users (userName, password, email) VALUES ("${userName}", "${password}", "${email}")`;
        const registers = connection.query(registersSql, (err, result) => {
          return res.json({
            message: `Hi  ${userName}  Your Registration is Succesful`,
          });
        });
      }
    });
  } else {
    return res.status(400).json({
      message: `username & password must be filled`,
    });
  }
};

exports.login = (req, res) => {
  if (req.body.userName != "" && req.body.password != "") {
    const { userName, password } = req.body;
    const selectSql = `SELECT userName FROM users WHERE userName = "${userName}"`;
    const selectLogin = connection.query(selectSql, (err, result) => {
      if (result && result.length >= 1) {
        const token = jwt.sign({ userName, password }, process.env.JWT_SECRET, {
          expiresIn: "2h",
        });
        return res.status(400).json({
          message: `Welcome ${userName} to Recipes Sharing Application`,
          token: token,
        });
      } else {
        console.log(req.body.userName);
        return res.json({
          message: `Please Register your Account`,
        });
      }
    });
  }
};

exports.users = async (req, res) => {
  try {
    const query = "SELECT * FROM users";
    const users = await connection
      .promise()
      .query(query)
      .then(([rows]) => {
        res.status(200).send(rows);
      });
  } catch (err) {
    res.json({
      message: "Please Verify your Account",
    });
  }
};
