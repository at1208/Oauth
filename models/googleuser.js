const mongoose = require('mongoose');
const { Schema } = mongoose.Schema

const GoogleUserSchema = new Schema({
googleId: String
})

const GoogleUser = mongoose.model('GoogleUser', GoogleUserSchema)
module.exports = GoogleUser;
