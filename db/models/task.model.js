import { model, Schema, Types } from "mongoose";

const schema = new Schema({
    title:String,
    bodyTask :String,
    listTask:[String],
    category:{
        type:Types.ObjectId,
        ref:"Category"
    },
    createdBy:{
        type:Types.ObjectId,
        ref:'User'
    }
},{
    versionKey:false,
    timestamps:true
})
export const Task = model('Task',schema)