const mongoose = require('mongoose');

const FacebookUserSchema = new mongoose.Schema({
facebookId: String,
name: String
})

FacebookUser = mongoose.model('FacebookUser', FacebookUserSchema)
