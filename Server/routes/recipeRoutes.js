const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const recipeController = require("../controllers/recipeController");
router.use(bodyParser.json());

router.get("/categories", recipeController.categories);
router.get("/categories/:id", recipeController.exploreCategoriesById);
router.post("/categories", recipeController.submitCategories);
router.get("/recipes", recipeController.recipes);
router.get("/recipes/:id", recipeController.exploreRecipesById);
// router.post("/recipes", recipeController.submitRecipe);
// router.delete("/recipes/:id", recipeController.deleteRecipesById);

module.exports = router;
