import Joi  from"joi";

const signupVal =Joi.object({
   name:Joi.string().min(2).max(20).required(),
    email:Joi.string().email().required(),
    password:Joi.string().pattern(/^[A-z][A-za-z0-9]{8,40}$/).required(),
    repassword:Joi.valid(Joi.ref('password')).required(),
    
})

const signinVal=Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().pattern(/^[A-z][A-za-z0-9]{8,40}$/).required(),
})
export{
    signupVal,
    signinVal
}