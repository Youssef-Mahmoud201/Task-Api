import { Task } from "../../../db/models/task.model.js"
import { catchError } from "../../middleware/catchError.js"
import { appError } from "../../utils/appErorr.js"
//to add Task
const addTask=catchError(async(req,res,next)=>{
   
    let task = new Task(req.body)
    await task.save()
    res.status(201).json({message:"the new category is",task})    
})
//to return all tasks and 
const getAllTask = catchError(async(req,res,next)=>{
    let task = await Task.find().skip(1).limit(10)
    res.status(201).json({message:"all tasks are",task})
})
// to return spacific task
const getTask = catchError(async(req,res,next)=>{
    const { taskId } =req.params;
    const { _id }= req.authUser;
    let task = await Task.findById({_id:taskId,createdBy :_id})
    if(!task) return(new appError('not found',401))
     res.status(201).json({message:"the task is",task})
})
const updateTask =catchError(async(req,res,next)=>{
    const { taskId } =req.params;
    const { _id }= req.authUser;
let task = await Task.findByIdAndUpdate({_id:taskId,createdBy :_id},req.body,{new:true})
    if(!task) return(new appError('not found',401))
     res.status(201).json({message:"the task is",task})
}) 
const deleteTask =catchError(async(req,res,next)=>{
    const { taskId } =req.params;
    const { _id }= req.authUser;
    let task = await Task.findByIdAndDelete({_id:taskId,createdBy :_id})
    if(!task) return(new appError('not found',401))
     res.status(201).json({message:"the task is",task})
}) 
export{
    addTask,
    deleteTask,
    updateTask,
    getAllTask,
    getTask
}