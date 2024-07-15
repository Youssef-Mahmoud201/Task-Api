import { User } from "../../db/models/user.model.js"
import { appError } from "../utils/appErorr.js"
import jwt from "jsonwebtoken"
import { StatusSystem } from "../utils/commen/enum.js"

export const auth= (roles)=>{
    return async(req,res,next)=>{
    const authorization = req.headers.authorization
    if(!authorization){ return next(new appError('the token not required',401))}
    if (!authorization.startWith('Bearer ')){ return next(new appError('this not invalide key', 401))}
    const token = authorization.split('Bearer ')[1]
    const decode = jwt.verify(token,'youssefmahmou888')
    if(!decode?._id) {return next(new appError('invalide peyload',401))}
    const authUser = await User.findById(decode._id)
    if(!authUser) {return next(new appError('not found',401))}
    if(!authUser.status==StatusSystem.ONLINE) {return next(new appError('you must login ',401))}
    req.authUser =authUser
    next()
    }



}