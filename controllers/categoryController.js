import slugify from "slugify";
import categoryModal from "../models/categoryModal.js";

export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Category Name is required!" });
    }

    const existingCategory = await categoryModal.findOne({ name });
    if (existingCategory) {
      return res.status(200).send({
        success: true,
        message: "Category already exist",
      });
    }

    const category = await new categoryModal({
      name,
      slug: slugify(name),
    }).save();

    res.status(200).send({
      success: true,
      message: "New category created",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Category",
    });
  }
};

// update category
export const updateCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category = await categoryModal.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
      );
      res.status(200).send({
          success: true,
          message: "Category updated successfully",
          category
      })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating category",
    });
  }
};


// get all category categoryController

export const categoryController =  async (req,res) => {
    try {
        const category = await categoryModal.find({})
        res.status(200).send({
            success: true,
            message: "All categories list" ,
            category
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            error,
            message:"Error while getting all categories"
        })
    }
} 


// get all category singleCategoryController

export const singleCategoryController =  async (req,res) => {
    try {
        const category = await categoryModal.findOne({slug:req.params.slug})
        res.status(200).send({
            success: true,
            message: "Get single category succussfully" ,
            category
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            error,
            message:"Error while getting single categories"
        })
    }
} 


// single category deleteCategoryController
export const deleteCategoryController =  async (req,res) => {
    try {
        const {id} = req.params
        await categoryModal.findByIdAndDelete(id)
        res.status(200).send({
            success: true,
            message: "Category deleted succussfully" ,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            error,
            message:"Error while deleteting category"
        })
    }
} 