const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

router.get("/categories", recipeController.categories);
router.get("/categories/:id", recipeController.exploreCategoriesById);
router.post("/categories", recipeController.submitCategories);
router.get("/recipes", recipeController.recipes);
router.get("/recipes/:id", recipeController.exploreRecipesById);
// router.get("/category", recipeController.submitCategories);

module.exports = router;
