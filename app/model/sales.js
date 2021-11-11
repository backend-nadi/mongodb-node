const mongoose = require('mongoose')


let saleSchema = new mongoose.Schema({
    volume: {
        type: Number
    },
    target: {
        type: Number
    },
})

module.exports = mongoose.model("sale", saleSchema)