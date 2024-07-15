import Joi from "joi";
 const addTaskVal = Joi.object({

    title:Joi.string().min(4).max(30).required(),
    createdBy:Joi.string().hex().length(24),
    category:Joi.string().hex().length(24)
})
const updateTaskVal= Joi.object({
    title:Joi.string().min(4).max(30).required(),
    createdBy:Joi.string().hex().length(24),
    category:Joi.string().hex().length(24)

})

export{
    addTaskVal,
    updateTaskVal
}
