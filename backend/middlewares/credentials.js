const allowsOrigins = require('../config/allow_origin')
const credentials=(req,res,next)=>{
    const origin=req.headers.origin
    if(allowsOrigins.includes(origin)){
        res.header('Access-Control-Allow-Credentials', true)
    }
    next()

}

module.exports=credentials