const mongoose = require('mongoose')

const productScheme = new mongoose.Schema({
    productName : {
        type : String,
        required:true
    },
    imgUrl:{
        type:String,
        required:true
    },
    postedOn:{
        type:Date,
        default:Date().now
    }
}) 

module.exports = mongoose.model('Products', productScheme)