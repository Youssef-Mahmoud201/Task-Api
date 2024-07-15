
import Joi from "joi";
const addCategoryVal = Joi.object({
    name: Joi.string().min(4).max(20).required(),
    createdBy:Joi.string().hex().length(24)
})
const updateCategoryVal =Joi.object({
    name: Joi.string().min(4).max(20).required(),
    slug:Joi.string().min(4).max(20).required()

})
export{
    addCategoryVal,
    updateCategoryVal
}