const mongoose = require('mongoose')


let personSchema = new mongoose.Schema({
    gender: {
        type: String
    },
    name: {
        title: {
            type: String
        },
        first: {
            type: String
        },
        last: {
            type: String
        }
    },
    location: {
        street:{
            type: String
        },
        city: {
            type: String
        },
        state:{
            type: String
        },
        postcode: {
            type: Number
        },
        coordinates: {
            latitude:{
                type: String
            },
            longitude: {
                type: String
            }
        },
        timezone: {
            offset: {
                type: String
            },
            description: {
                type: String
            }
        },
    },
    email: {
        type: String
    },
    login: {
        uuid: {
            type: String
        },
        username: {
            type: String
        },
        password: {
            type: String
        },
        salt: {
            type: String
        },
        md5: {
            type: String
        },
        sha1: {
            type: String
        },
        sha256: {
            type: String
        }
    },
    dob: {
        date: {
            type: String
        },
        age: {
            type: Number,
            index: true
        }
    },
    registered: {
        date: {
            type: String
        },
        age: {
            type: Number
        }
    },
    phone: {
        type: Number
    },
    cell:{
        type: Number
    },
    ids: {
        name: {
            type: String
        },
        value: {
            type: String
        }
    },
    picture:{
        large: {
            type: String
        },
        medium: {
            type: String
        },
        thumbnail: {
            type: String
        }
    },
    nat: {
        type: String
    }
})



module.exports = mongoose.model("persons", personSchema)