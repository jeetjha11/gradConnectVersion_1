import mongoose, { Schema } from "mongoose";


const Schema=mongoose.Schema

const EmailSchma=new Schema(
    {
        from:{
            type:String,
            required:true
        },
        to:{
            type:[],
            required:true
        },
        subject:{
            type:String,
            required:true
        },
        body:{
            type:String,
            required:true
        },
        date:{
            type:Date,
            default:Date.now
        },

    }
)

export default mongoose.model("Email",EmailSchma)


