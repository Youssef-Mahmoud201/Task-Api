import { Router } from "express";
import { auth } from "../../middleware/authToken.js";
import { validate } from "../../middleware/validate.js";
import { addCategoryVal, updateCategoryVal } from "./category.validation.js";
import { addCategory, deleteCategpry, getAllCategory, getCategory, updateCategory } from "./category.controller.js";

const categoryRouter =Router()
//to check status and authentecation

// to add category
categoryRouter.post('/',auth(),validate(addCategoryVal),addCategory)

// to delete category
categoryRouter.delete('/delete/:categoryId',auth(),deleteCategpry)

//to update category
categoryRouter.put('/update/:categoryId',auth(),validate(updateCategoryVal),updateCategory)

//to get all categories and search about category
categoryRouter.get('/',getAllCategory),


categoryRouter.get('/get/:categoryId',auth(),getCategory)

 export default categoryRouter;