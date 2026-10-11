const express = require('express')

const create_product = require('../../controllers/product_handlers.js/create_product')
const get_product = require('../../controllers/product_handlers.js/get_product')
const update_product = require('../../controllers/product_handlers.js/update_product')
const delete_product = require('../../controllers/product_handlers.js/delete_product')

const { verify_token,verify_token_store_owner,verify_token_admin } = require('../../middlewares/verifyTokens')

const router = express.Router()

const uuid=require('uuid').v4()
const multer=require('multer')

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/')

    },
    filename:(req,file,cb)=>{
    
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

router.post('/create_product',verify_token_admin,upload.single("product_pic"),create_product)
router.get('/get_product',get_product)
router.put('/update_product/:id',verify_token_admin,upload.single("product_pic"),update_product)
router.delete('/delete_product/:id',verify_token_store_owner,delete_product)



module.exports = router