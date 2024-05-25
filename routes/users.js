const mongoose = require('mongoose'); // Require Mongoose


const plm = require("passport-local-mongoose"); //Require Passport


mongoose.connect("mongodb://127.0.0.1:27017/InstagramDataBase"); //Connect to Mongodb

// Create user Scheam
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "post"
  }],
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    require: true,
  },

  bio: {
    type: String
  },

  profileImage: {
    type: String
  }
});

userSchema.plugin(plm); // Provide serializeUser and deserializeUser

module.exports = mongoose.model('User', userSchema);


