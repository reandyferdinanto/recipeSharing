const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

router.get("/categories", recipeController.categories);
// router.get("/categories/:id", recipeController.exploreCategoriesById);
router.post("/postcategories", recipeController.submitCategories);
router.get("/recipes", recipeController.recipes);
// router.get("/recipes/:id", recipeController.exploreRecipesById);
// router.post("/recipes", recipeController.submitRecipe);
// router.delete("/recipes/:id", recipeController.deleteRecipesById);

router.post("/cat", recipeController.simpleCat);

module.exports = router;
