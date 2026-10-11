const asyncHandler = require('express-async-handler')
const product = require('../../models/product_model')
const fs = require('fs')
const path = require('path')
const { log } = require('console')
const { findById } = require('../../models/user_model')
const { restart } = require('nodemon')
const update_product = asyncHandler(async (req, res) => {


    const { title, description, price } = req.body
    const find_product = await product.findById(req.params.id)
     
    if(find_product.path!=req.file.path){
        fs.unlink(find_product.path, function (err) {
            if (err) throw err;
            console.log('paths are not same');
          });

    }

    if (!find_product) {
        res.status(400)
        throw new Error('your product is not found')

    }
    try {
console.log(req.file.path);
        const result = await product.findByIdAndUpdate(req.params.id,{ $set: req.body ,path:req.file.path}, { new: true,runValidators: true  })
        console.log(result);
        res.status(200).json(result)
    } catch (error) {
        res.status(400)
        throw new Error(error)

    }

})

module.exports = update_product