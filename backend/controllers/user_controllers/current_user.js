const asyncHandler=require('express-async-handler')
const User = require('../../models/user_model')

const current_user=asyncHandler(async(req,res)=>{

    const current_user_id = req.user

    try {

        const result = await User.findById(current_user_id).select('-password').select('-token')

        res.status(200).json(result)
        
    } catch (error) {
        throw new Error(error)
    }

})

module.exports=current_user