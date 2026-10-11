const jwt = require('jsonwebtoken')

const generateAccessToken=(id)=>{

    const token = jwt.sign({id:id.toString()},process.env.ACCESS_TOKEN,{expiresIn:'7d'})
return token
}

const generateRefreshToken=(id)=>{

    const token = jwt.sign({id:id.toString()},process.env.REFRESH_TOKEN,{expiresIn:'7d'})
return token
}


module.exports={generateAccessToken,generateRefreshToken}