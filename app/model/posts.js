const mongoose = require('mongoose')


let postsSchema = new mongoose.Schema({
    title:{
        type: String
    },
    text: {
        type: String
    },
    tags: [],
    creator:{
        type: mongoose.SchemaTypes.ObjectId
    },
    comments:[
        {
            text: {
                type: String
            },
            author: {
                type: mongoose.SchemaTypes.ObjectId
            }
        }
    ]
})

module.exports = mongoose.model('post', postsSchema)