import mongoose, { Schema } from "mongoose";


const Schema=mongoose.Schema

const SMTPSchema=new Schema({
    host:{
        type:String,
        required:true
    },
    port:{
        type:Number,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    ssl:{
        type:Boolean,
        default:false
    },
    tls:{
        type:Boolean,
        default:false
    },
    auth:{
        type:Boolean,
        default:true
    },
    fromEmail:{
        type:String,
        required:true
    },
    createdAt:{type:Date,
        default:Date.now
    },
    updatedAt:{type:Date,
        default:Date.now
    },  
    deletedAt:{
        type:Date,
        default:null
    }
})

export default mongoose.model("SMTP",SMTPSchema)