const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        imgURL: []
    }
)

module.exports = mongoose.model('Post', postSchema)