const mongoose = require('mongoose')

let placeSchema = new mongoose.Schema({
    name: {
        type: String
    },
    location: {
        type: {
            type: String
        },
        coordinates: []
    }
})

placeSchema.index({location:'2dsphere'})

module.exports = mongoose.model('place', placeSchema)