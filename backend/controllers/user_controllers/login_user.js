const asyncHandler = require('express-async-handler')
const user = require("../../models/user_model")
const bcryptjs = require('bcryptjs')
const {generateAccessToken,generateRefreshToken} = require('../../middlewares/tokens') 
const joi = require("joi")
const login_user = asyncHandler(async (req, res) => {
    const { email, password } = req.body


    const login_validator = joi.object({
    
        
        email: joi.string().email().required("email is require field").trim().lowercase(),
        password: joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).trim().min(6),
        
        
      });
      login_validator.validate(req.body)

    if (!email || !password) {
        res.status(400)
        throw new Error(`please fill all input fields`)


    }

    const result = await user.findOne({ email })

    // const existed_email = result._doc.email
       if(!result){
        res.status(400)
        throw new Error("please put valid email")

       }
 

    const hashed_password = result._doc.password
    console.log(result.password);

    const compare_password = await bcryptjs.compare(password, hashed_password)

    if (!compare_password) {
        res.status(400)
        throw new Error(`your password is incorrect`)
    }





    try {

        const {password,token,...rest}= result._doc
        const refresh_token = generateRefreshToken(result._id)
        // await user.findByIdAndUpdate(result._id,{token:refresh_token})

        res.cookie('cookkie',refresh_token,{httpOnly:true,maxAge:1*1000*60*60*24*366})
   
        res.status(200).json({...rest,token:generateAccessToken(result._id)})
        console.log({...rest,token:generateAccessToken(result._id)})


    } catch (error) {

        throw new Error(error)


    }



})

module.exports = login_user