const error_middleware = (err,req,res,next)=>{

    const sendStatus = 500
    res.status(sendStatus)

    res.json({
        message:err.message,
        stack:err.stack
    })

}

module.exports = error_middleware