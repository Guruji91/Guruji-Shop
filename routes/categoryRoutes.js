import express from "express";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from "../controllers/categoryController.js";
const router = express.Router();

// routes

// create category createCategoryController
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

// update category updateCategoryController
router.put(
    "/update-category/:id",
    requireSignIn,
    isAdmin,
    updateCategoryController
);

// get all category categoryController
router.get(
    "/get-category",
    categoryController
);
  

// single category singleCategoryController
router.get(
    "/single-category/:slug",
    singleCategoryController
);

// single category deleteCategoryController
router.delete(
    "/delete-category/:id",
    requireSignIn,
    isAdmin,
    deleteCategoryController
);
export default router;
