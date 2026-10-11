const mongoose = require("mongoose")


const db_connection = ()=>{
    mongoose.connect(process.env.MONGO_URL).then(()=>{console.log("db is connectecd")}).catch((err)=>{console.log(err)})
}

module.exports=db_connection