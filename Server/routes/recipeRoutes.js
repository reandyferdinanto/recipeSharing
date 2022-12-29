const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const recipeController = require("../controllers/recipeController");
const userController = require("../controllers/userController");
const auth = require("../middleware/auth");

router.use(bodyParser.json());

router.post("/registers", userController.register);
router.get("/logins", userController.login);
router.get("/users", auth.verifyToken, userController.users);

router.get("/categories", recipeController.categories);
router.get("/categories/:id", recipeController.exploreCategoriesById);
router.post("/categories", auth.verifyToken, recipeController.submitCategories);
router.delete(
  "/categories/:id",
  auth.verifyToken,
  recipeController.deleteCategoriesById
);
router.get("/recipes", recipeController.recipes);
router.get("/recipes/:id", recipeController.exploreRecipesById);
router.post("/recipes", auth.verifyToken, recipeController.submitRecipe);
router.delete(
  "/recipes/:id",
  auth.verifyToken,
  recipeController.deleteRecipesById
);

module.exports = router;
