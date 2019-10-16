const mongoose = require('mongoose');

const GoogleUserSchema = new mongoose.Schema({
googleId: String,
email:  String,
name: String,
image:  String

})

mongoose.model('GoogleUser', GoogleUserSchema)
