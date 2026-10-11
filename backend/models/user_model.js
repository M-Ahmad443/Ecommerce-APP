const mongoose = require("mongoose")
const { v4: uuidv4 } = require('uuid');
const my_uuid = uuidv4();
const user_model = new mongoose.Schema({
    profile_pic:{
       type:Buffer
    },
    path:{
        type:String
    },
    _id:{
        
        type:String,
        default:uuidv4
    },
    name:
    {
        type: String,
        required: true,

    },
    email: {
        type: String,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please add a valid email",
        ],
        required: [true, "E-mail is Required"],
        unique: [true, "E-mail Already Exist"],
        lowercase: true,

    },
    password:
    {
        type: String,
        required: true,
    },
    gender:
    {
        type: String,
        required: true,
    },
    address:
    {
        type: String,
        required: true,
    },
    roles: {
        type: String,
        enum: ["customer", "admin", "StoreOwner"],
        default: "customer",
    },

},

{
    timestamps: true,

    })

    

module.exports = mongoose.model("User", user_model) 
