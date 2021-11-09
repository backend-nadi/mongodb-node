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
    },
    hobbies: [
        {
            title:{
                type: String
            },
            frequency: {
                type: String
            }
        }
    ],
    phone: {
        type: String
    }
})

module.exports = mongoose.model("user", userSchema)