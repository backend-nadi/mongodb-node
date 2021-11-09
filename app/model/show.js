const mongoose = require('mongoose')

let showSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    url: {
        type: String
    },
    name: {
        type: String
    },
    type: {
        type: String
    },
    language: {
        type: String
    },
    genres: [],
    status: {
        type: String
    },
    runtime: {
        type: Number
    },
    premiered: {
        type: Date
    },
    officialSite: {
        type: String
    },
    schedule: {
        time: {
            type: String
        },
        days: []
    },
    rating: {
        average: {
            type: Number
        }
    },
    wight:{
        type: Number
    },
    network:{
        id:{
            type: Number
        },
        name:{
            type: String
        },
        country:{
            name:{
                type: String
            },
            code: {
                type: String
            },
            timezone:{
                type: String
            }
        }
    },
    webChannel:{
        type: String
    },
    externals:{
        tvrage: {
            type: Number
        },
        thetvdb:{
            type: Number
        },
        imdb:{
            type: String
        }
    },
    image: {
        medium:{
            type: String
        },
        original:{
            type: String
        }
    },
    summary:{
        type: String
    },
    updated:{
        type: Number
    },
    links:{
        self:{
            href:{
                type: String
            }
        },
        previousepisode:{
            href:{
                type: String
            }
        }
    }
})

module.exports = mongoose.model('show', showSchema)