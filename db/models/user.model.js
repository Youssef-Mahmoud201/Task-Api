import { model, Schema } from "mongoose";
import { Role, StatusSystem } from "../../src/utils/commen/enum.js";


const schema= new Schema({
    name:{
        type: String,
        required : true
    },
    email :{
        type: String,
        unique: [true,'this email not required'],
        required: true
    },
    password :{
        type: String,
        unique: [true,'this email not required'],
        required: true
    },
    isBlocked:{
        type: Boolean,
        default:false
    },
    roles:{
        type: String,
        enum:Object.values(Role) ,
        default:Role.USER
    },
    status:{
        type: String,
        enum:Object.values(StatusSystem) ,
        default:StatusSystem.OFFLINE
    }

},{
    versionKey:false,
    timestamps:true
})
export const User = model('User',schema)