const jwt = require('jsonwebtoken')
const User = require('../models/user_model')





const verify_token = (req, res, next) => {

    if (req?.headers?.authorization?.startsWith('Bearer')) {

        const token = req?.headers?.authorization.split(' ')[1]


        try {

            const verify = jwt.verify(token, process.env.ACCESS_TOKEN)
                console.log(verify);
            if (verify) {

                req.user = verify.id
                console.log(req.user)
                next()

            }

        } catch (error) {
            res.status(400)
            throw new Error(error)

        }
    }
}

const verify_token_admin = (req, res, next) => {

    // verify_token(req, res, async () => {

    //     const result = await User.findById(req.user)
    //     const admin = result.roles.includes('admin')

    //     if (admin) {
    //         res.status(200)
    //         next()
    //         return
    //     }
    //     res.json({ message: 'you are not authorized' })
    // })
    verify_token(req,res,async()=>{

        const result = await User.findById(req.user)
        const admin = result.roles.includes("admin")
        if(admin){
            res.status(200)
            next()
            return
        }
        res.json({message:"you are not authorized"})

    })

}

const verify_token_store_owner = (req, res, next) => {
    verify_token(req, res, async () => {

        const result = await User.findById(req.user)
        
        const StoreOwner = result.roles.includes('StoreOwner')

        if (StoreOwner) {
            res.status(200)
            next()
            return
        }

        res.json({ message: 'you are not authorized' })


    })

}

module.exports = { verify_token, verify_token_admin, verify_token_store_owner }