const connection = require("../models/database");

//GET categories
exports.categories = async (req, res) => {
  try {
    const queryProducts = "SELECT * FROM recipecategories";
    const users = await connection
      .promise()
      .query(queryProducts)
      .then(([rows]) => {
        res.status(200).send(rows);
      });
  } catch (err) {
    res.json({
      message: "Please Verify your Account",
    });
  }
};

// Select Categories by Id
exports.exploreCategoriesById = async (req, res) => {
  try {
    const querySelbyId = `SELECT * FROM recipecategories WHERE id = ?`;
    const SelbyId = await connection
      .promise()
      .query(querySelbyId, [req.params.id])
      .then((rows, result) => {
        res.send(rows[0]);
      });
  } catch (err) {
    res.json({
      message: "Please Verify your Account",
    });
  }
};

// POST Categories of the recipes
exports.submitCategories = async (req, res) => {
  try {
    if (req.body.categoryName != "") {
      const { categoryName } = req.body;
      const InsCatQuery = `INSERT INTO recipecategories (categoryName)
   VALUES ('${categoryName}')`;
      const selectSql = `SELECT categoryName FROM recipecategories WHERE categoryName = "${categoryName}"`;
      const selects = connection.query(selectSql, (err, result) => {
        if (result && result.length >= 1) {
          return res.status(400).json({
            message: `Category Name : ${categoryName}  already registered`,
          });
        } else {
          const query = connection
            .promise()
            .query(InsCatQuery)
            .then(([rows]) => {
              res.status(200).send({
                message: `${categoryName} is submited`,
              });
            });
          console.log({ message: `${categoryName} is submited` });
        }
      });
    }
  } catch (err) {
    res.json({
      message: "Please Verify your Account",
    });
    console.log(err);
  }
};

// Delete categories by Id
exports.deleteCategoriesById = async (req, res) => {
  try {
    const { id } = req.params;
    const queryDelete = `DELETE FROM recipecategories WHERE id = ?`;
    const deleteRecipe = await connection
      .promise()
      .query(queryDelete, [req.params.id])
      .then((rows, result) => {
        res.status(200).send({
          message: `category with ID : ${id} deleted successfully`,
        });
      });
  } catch (err) {
    console.log(err);
    res.json({
      message: "Please Verify your Account",
    });
  }
};

// Select All Recipes
exports.recipes = async (req, res) => {
  try {
    const queryProducts = "SELECT * FROM recipestable";
    const users = await connection
      .promise()
      .query(queryProducts)
      .then(([rows]) => {
        res.status(200).send(rows);
      });
  } catch (err) {
    res.json({
      message: "Please Verify your Account",
    });
  }
};

//Select recipes by Id
exports.exploreRecipesById = async (req, res) => {
  try {
    const querySelbyId = `SELECT * FROM recipestable WHERE recipeID = ?`;
    const SelbyId = await connection
      .promise()
      .query(querySelbyId, [req.params.id])
      .then((rows, result) => {
        res.send(rows[0]);
      });
  } catch (err) {
    res.json({
      message: "Please Verify your Account",
    });
  }
};

exports.submitRecipe = async (req, res) => {
  try {
    if (req.body.categoryName != "") {
      const {
        categoryName,
        recipeTitle,
        recipeIngredients,
        recipeDescription,
        recipeImages,
      } = req.body;
      const InsRecQuery = `INSERT INTO recipestable (categoryName, recipeTitle, recipeIngredients, recipeDescription, recipeImages)
   VALUES ('${categoryName}', '${recipeTitle}', '${recipeIngredients}', '${recipeDescription}', '${recipeImages}' )`;
      const selectSql = `SELECT categoryName FROM recipecategories WHERE categoryName = "${categoryName}"`;
      const selects = connection.query(selectSql, (err, result) => {
        if (result && result.length === 0) {
          return res.status(400).json({
            message: `Category Name : ${categoryName}  never been registered`,
          });
        } else {
          const query = connection
            .promise()
            .query(InsRecQuery)
            .then(([rows]) => {
              res.status(200).send({
                message: `${recipeTitle} is submited`,
              });
            });
          console.log({ message: `${recipeTitle} is submited` });
        }
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      message: "Please Verify your Account",
    });
    console.log(err);
  }
};

//Delete recipe by Id
exports.deleteRecipesById = async (req, res) => {
  try {
    const { id } = req.params;
    const queryDelete = `DELETE FROM recipestable WHERE recipeID = ?`;
    const deleteRecipe = await connection
      .promise()
      .query(queryDelete, [req.params.id])
      .then((rows, result) => {
        res.status(200).send({
          message: `Categories with ID: ${id} deleted successfully`,
        });
      });
  } catch (err) {
    console.log(err);
    res.json({
      message: "Please Verify your Account",
    });
  }
};
