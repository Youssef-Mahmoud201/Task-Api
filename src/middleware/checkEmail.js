import bcrypt from "bcrypt"
import { catchError } from "./catchError.js";
import { User } from "../../db/models/user.model.js";
export const checkEmail=catchError(async(req,res,next)=>{
    let isFound = await User.findOne({email:req.body.email})
    if(isFound) return res.status(409).json({message:"this email already exist"});
    req.body.password=bcrypt.hashSync(req.body.password,8)
    next()
})