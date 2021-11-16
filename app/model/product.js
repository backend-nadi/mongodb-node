const mongoose = require('mongoose')


let productSchema = new mongoose.Schema({
    name:{
        type: String
    },
    price:{
        type: Number
    },
    tags: [],
    details:{
        cpu:{
            type: String
        }
    }
})

module.exports = mongoose.model('product', productSchema)