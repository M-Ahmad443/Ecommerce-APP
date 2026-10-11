const mongoose = require("mongoose")
const user = require('./user_model')
const user_model = new mongoose.Schema({
    createdBy:{
        type:String ,
        required:true,
        ref:'User'
    
       },
    product_pic:{
       type:Buffer
    },
    path:{
        type:String
    },
    
    title:
    {
        type: String,
        required: true,

    },
    description:
    {
        type: String,
        required: true,
    },
    price:
    {
        type: String,
        required: true,
    },
},

{
    timestamps: true,

    })

module.exports = mongoose.model("Product", user_model) 
