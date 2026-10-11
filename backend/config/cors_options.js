const allowsOrigins=require('./allow_origin')
const corsOptions={
    origin:(origin,callback)=>{
        if(allowsOrigins.indexOf(origin) !== -1 || !origin){
            callback(null,true)

        }
        else{
            callback(new Error('Cors not Allowed this site'))
        }
    

    },
    optionsSuccessStatus:200,
}

module.exports=corsOptions