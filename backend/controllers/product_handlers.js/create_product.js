const asyncHandler = require('express-async-handler')
const product = require('../../models/product_model')
const express =  require('express')
const path = require('path')
const create_product = asyncHandler(async (req, res) => {

    const { title, description, price } = req.body
  
    express.static(path.join('uploads'))
    if (!title || !description || !price) {

        res.status(400)
        throw new Error('please fill all input fields')
    }

    try {


        const result = await product.create({  createdBy: req.user, title, description,price,path: req.file && req.file.path,})
        res.status(200).json(result)

    } catch (error) {
        res.status(401)
        throw new Error(error)

    }
})

module.exports = create_product