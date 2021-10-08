const express = require('express')
const multer = require('multer')
const {
    allProducts,
    addProduct,
    oneProduct,
    editProduct,
    removeProduct
} = require('../controller/products')

const router = express.Router()
const storage = multer.diskStorage({
    destination: (req,file,callback)=>{
        callback(null, './public/images/uploads/')
    },
    filename: (req,file,callback)=>{
        callback(null, Date.now() + file.originalname )
    }
})

const upload = multer({
    storage: storage
})

router.route('/').get(allProducts).post(upload.single('imgUrl'),addProduct)

router.route('/:id').get(oneProduct).patch(editProduct).delete(removeProduct)


module.exports = router