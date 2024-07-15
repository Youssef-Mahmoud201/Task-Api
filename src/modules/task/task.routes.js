import { Router } from "express";
import { auth } from "../../middleware/authToken.js";
import { validate } from "../../middleware/validate.js";
import { addTaskVal, updateTaskVal } from "./task.validation.js";
import { addTask, deleteTask, getAllTask, getTask, updateTask } from "./task.controller.js";

const taskRouter =Router()

taskRouter.post('/',auth(),validate(addTaskVal),addTask)

taskRouter.get('/',getAllTask)

taskRouter.get('/getTask/:taskId',auth(),getTask)


taskRouter.delete('/delete/:taskId',auth(),deleteTask)


taskRouter.put('/update/:taskId',auth(),validate(updateTaskVal),updateTask)

export default taskRouter;
