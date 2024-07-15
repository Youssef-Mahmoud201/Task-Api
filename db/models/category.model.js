import { model, Schema, Types } from "mongoose";

const schema = new Schema({
    name:{
        type :String,
        unique:[true,'the name is already exsit'],
        minLingth:[2,'this name too short'],
        trim:true,
        required:true
    },
    slug:{
        type:String,
        lowercase:true,
        required :true

    },
    createdBy:{
        type:Types.ObjectId,
        ref:'User'
    }
    

},{
    versionKey :false,
    timestamps:true

})
export const Category = model('Category',schema)