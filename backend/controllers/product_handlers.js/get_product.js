const asyncHandler=require('express-async-handler')
const product = require('../../models/product_model')

const get_product=asyncHandler(async(req,res)=>{

    try {
        const result = await product.find()
        res.status(200)
        res .json(result)
    } catch (error) {
        res.status(400)
        throw new Error(error)
        
    }

})

module.exports=get_product