import slugify from "slugify"
import { Category } from "../../../db/models/category.model.js"
import { catchError } from "../../middleware/catchError.js"
import { appError } from "../../utils/appErorr.js"



const addCategory=catchError(async(req,res,next)=>{
    req.body.slug = slugify(req.body.name)
    let category = new Category(req.body)
    await category.save()
    res.status(201).json({message:"the new category is",category})    
})
const getAllCategory = catchError(async(req,res,next)=>{
    let condtion = {}
    if(req.query.key){
        condtion["$or"]=[
            {name:{$regex:req.query.key}} 
        ]
    }
    let categories = await Category.find()
    if(!categories) return next(new appError('not found',401));
    res.status(201).json({message:"all categories are",categories})
})
const getCategory = catchError(async(req,res,next)=>{
    const {categoryId} =req.params
    const {_id}= req.authUser;

    let category = await Category.findById({
        _id:categoryId,
        createdBy :_id
    })
    if(!category) return(new appError('not found',401))
     res.status(201).json({message:"the category is",category})
})
const updateCategory =catchError(async(req,res,next)=>{
    const {categoryId} =req.params;
    const {_id}= req.authUser;
    let category = await Category.findByIdAndUpdate({ _id:categoryId,createdBy :_id },req.body,{new:true})
    if(!category) return(new appError('not found',401))
     res.status(201).json({message:"the category is",category})
}) 
const deleteCategpry =catchError(async(req,res,next)=>{
    const {categoryId} =req.params;
    const {_id}= req.authUser;
    let category = await Category.findByIdAndDelete({_id:categoryId,createdBy :_id})
    if(!category) return(new appError('not found',401))
     res.status(201).json({message:"the category is",category})
})  
export{
    updateCategory,
    deleteCategpry,
    addCategory,
    getAllCategory,
    getCategory
}