const mongoose = require('mongoose'); // Require Mongoose

mongoose.connect("mongodb://127.0.0.1:27017/InstagramDataBase"); //Connect to Mongodb

// Create post Schema
const postSchema = new mongoose.Schema({
    picture: {
        type: String
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    date: {
        type: Date,
        default: Date.now
    },

    caption: {
        type: String
    },

    Likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ]
});

module.exports = mongoose.model('post', postSchema);