const mongoose = require('mongoose')

const productScheme = new mongoose.Schema({
    productName : {
        type : STRING,
        required:true
    },
    producUrl:{
        type:STRING,
        required:true
    },
    postedOn:{
        type:Date,
        default:Date().now
    }
}) 

module.exports = mongoose.