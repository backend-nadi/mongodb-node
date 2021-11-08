const mongoose = require('mongoose')


let userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email:{
        type: String
    },
    age:{
        type: Number
    }
})

module.exports = mongoose.model("user", userSchema)