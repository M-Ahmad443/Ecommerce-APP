const asyncHandler = require('express-async-handler')
const product = require('../../models/product_model')
const fs = require('fs')
const delete_product = asyncHandler(async (req, res) => {

    const find_product = await product.findById(req.params.id)

    if (!find_product) {
        res.status(400)
        throw new Error('your product is not found')

    }
    try {
        fs.unlink(find_product.path, function (err) {
            if (err) throw err;
            console.log('file deleted');
          });
        const result = await product.findByIdAndRemove(req.params.id)
        res.status(200)
        res.json(result)
    } catch (error) {
        res.status(400)
        throw new Error(error)

    }

})

module.exports = delete_product