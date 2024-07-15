import { User } from "../../../db/models/user.model.js"
import { catchError } from "../../middleware/catchError.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { appError } from "../../utils/appErorr.js"

const signup = catchError(async(req,res)=>{
    let user = await User.insertMany(req.body)
    user[0].password =undefined
    res.status(201).json({message:"wlcome",user})

})
const signin = catchError(async(req,res,next)=>{
    let user = await User.findOne({email:req.body.email})
    if(!user||!bcrypt.compareSync(req.body.password,user.password)){
        return next(appError('the email or password is incorrect',401))
    }
    jwt.sign({_id:user._id},'yossefmahmoud888',(err,token)=>{
        res.json({message:"success",token})
        
    })
    user.status = UserStatus.Online

})
export{
    signin,
    signup
}