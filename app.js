process.on('uncaughtException',()=>{
    console.log("error in code ")
})
import express from "express"
import authRouter from "./src/modules/auth/auth.routes.js"
import categoryRouter from "./src/modules/category/category.routes.js"
import taskRouter from "./src/modules/task/task.routes.js"
import { appError } from "./src/utils/appErorr.js"
import { globalError } from "./src/middleware/globalError.js"
import { dbConnect } from "./db/dbConnection.js"

const app =express()
const port =3000
app.use(express.json())


app.use('/auth',authRouter)
app.use('/category',categoryRouter)
app.use('/task',taskRouter)

app.use('*',(req,res,next)=>{
    next(new appError(`route not found${req.originalUrl}`,404))
})

app.use(globalError)
process.on('unhandledRejection',(err)=>{
    console.log(err)
})
app.get('/',(req,res)=>res.send('hallo wrold!'))
app.listen(port,()=>console.log(` example app listening on port ${port}!`))