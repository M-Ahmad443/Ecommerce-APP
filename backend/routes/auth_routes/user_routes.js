const express = require('express')
const app= express()
const currentUser = require('../../controllers/user_controllers/current_user')

const loginUser=require('../../controllers/user_controllers/login_user')
const registerUser = require('../../controllers/user_controllers/register_user')
const { verify_token } = require('../../middlewares/verifyTokens')

const router = express.Router()

const uuid=require('uuid').v4()
const multer=require('multer')

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/')

    },
    filename:(req,file,cb)=>{
        console.log();
        const{originalname,mimetype}=file
        console.log(file);
        if(mimetype.split('/')[0]==='image'){
        const originalName=`${uuid}-${originalname}`
        console.log(originalname);
        cb(null,originalName)
        }
        else{
        cb(new Error('format is not valid'),null)
        }
    }

})

const upload=multer({storage})



router.post('/login',loginUser)
router.post('/register',upload.single("profile_pic"),registerUser)
router.get('/current_user',verify_token,currentUser)



module.exports = router