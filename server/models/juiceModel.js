import mongoose from "mongoose";

const juiceSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        requireed:true
    },
    image:{
       public_id:{
        type:String,
        required:true
       },
       url:{
        type:String,
        required:true
       }
    },
    quantity:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    }
})



const Juice = mongoose.model('Juice',juiceSchema)

export default Juice



