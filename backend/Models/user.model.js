import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      role: {
        type: String,
        enum: ['customer', 'agent', 'admin'],
        default: 'customer',
      },
      department: {
        type: String,
        default:""
        
      },
      status:{
        type:String,
        enum:["active","inactive"],
        default:"active",
      },
      password: {
        type: String,
        required: true,
      },


},{timestamps:true})

export const User=mongoose.model("User",userSchema)