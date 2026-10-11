const asyncHandler = require("express-async-handler")
const User = require("../../models/user_model")
const joi = require("joi")
const bcrypt = require("bcryptjs")
const path = require('path');
const express = require("express")
const register_user = asyncHandler(async (req, res) => {

    express.static(path.join('uploads'))

    const { name, email, password, gender, address, roles } = req.body
    console.log("abc", req.body);
    console.log('files', req.file)
    const register_validator = joi.object().keys({
        name: joi.string().trim(),

        email: joi.string().email().required("email is require field").trim().lowercase(),
        password: joi.string().required().min(6).pattern(new RegExp(/^[a-zA-Z0-9]{3,30}$/)).trim(),
        roles: joi.string().trim().required("roles is required field"),
        address: joi.string().trim().min(0),
        gender: joi.string().trim(),

    });
    register_validator.validate(req.body)

    if (!name || !email || !password || !gender || !address) {
        res.status(400)
        throw new Error('please fill all input fields')
    }

    const existed_email = await User.findOne({ email })

    if (existed_email) {

        res.status(400)
        throw new Error('Email already Exists')


    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)


    try {

        const result = await User.create({ path: req.file && req.file.path, name, email, password: hashedPassword, gender, address, roles })

        res.status(200).json(result)

    } catch (error) {
        throw new Error(error)

    }

})


module.exports = register_user 
