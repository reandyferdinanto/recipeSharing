// const pools = require("./Server/models/database");

// const { getConnection } = require("../models/database");
const pool = require("../models/database");

// # GET /
// # Homepage

// exports.homepage = async (req, res) => {
//   res.render("index", { title: "Recipe Sharing" });
// };

// using try catch

exports.categories = async (req, res) => {
  try {
    const limitNumber = 5;
    const categories = await pool.query(
      "SELECT * FROM recipesharing.recipecategories",
      (err, rows) => {
        res.send(rows);
      }
    );
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};

exports.exploreCategoriesById = async (req, res) => {
  try {
    const categories = await pool.query(
      `SELECT * FROM recipesharing.recipecategories WHERE id = ?`,
      [req.params.id],
      (err, rows) => {
        res.send(rows);
      }
    );
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};

exports.submitCategories = async (req, res) => {
  //const params = req.body;
  //console.log(req.body);
  // console.log(req.body.categoryName);
  // console.log(req.body.createdAt);
  try {
    const categories = await pool.query(
      `INSERT INTO recipesharing.recipecategories (categoryName) VALUES (?)`,
      Object.values(req.body),
      (err, rows) => {
        if (!err) {
          res.send("category successfully created");
        } else {
          console.log(err);
          console.log(categories);
        }
      }
    );
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};

exports.recipes = async (req, res) => {
  try {
    // const limitNumber = 20;
    const categories = await pool.query(
      "SELECT * FROM recipesharing.recipestable",
      (err, rows) => {
        res.status(200).send(rows);
      }
    );
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};

exports.exploreRecipesById = async (req, res) => {
  try {
    const categories = await pool.query(
      `SELECT * FROM recipesharing.recipestable WHERE recipeID = ?`,
      [req.params.id],
      (err, rows) => {
        res.send(rows);
      }
    );
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};

// exports.submitCategories = async (req, res) => {
//   try {
//     const params = req.body
//     const categories = await pool.query(
//       "INSERT INTO recipesharing.recipecategories SET ?  ",
//       [params],
//       (err, rows) => {
//         res.send(rows);
//       }
//     );
//   } catch (error) {
//     res.status(500).send({ message: error.message || "Error Occured" });
//   }

// exports.submitCategory = (req, res) => {
//   pool.getConnection((err, connection) => {
//     if (err) throw err;
//     console.log(`connected as id ${connection.threadId}`);
//     const data = { ...req.body };
//     const querySql = "INSERT INTO recipesharing.recipecategories SET ?";
//     connection.query(querySql, data, (err, rows) => {
//       connection.release();
//       if (!err) {
//         res.send(rows);
//       } else {
//         console.log(err);
//       }
//     });
//   });
// };

// exports.submitCategory = async (req, res) => {
//   // const params = req.body;
//   try {
//     const category = await pool.query(
//       "INSERT INTO recipesharing.recipecategories (categoryName, createdAt) VALUES (?,?)",
//       [req.body],
//       (err, rows) => {
//         res.send(rows);
//         if (!err) {
//           res.send(
//             `category with the record ID ${params.categoryName} has been added.`
//           );
//         } else {
//           console.log(err);
//         }

//         console.log("The data from beer table are:11 \n", rows);
//       }
//     );
//   } catch (error) {
//     res.status(500).send({ message: error.message || "Error Occured" });
//   }
// }
