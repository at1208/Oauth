const mongoose = require('mongoose');

const GoogleUserSchema = new mongoose.Schema({
googleId: String
})

mongoose.model('GoogleUser', GoogleUserSchema)
