const mongoose = require('mongoose');

const FacebookUserSchema = new mongoose.Schema({
facebookId: String
})

FacebookUser = mongoose.model('FacebookUser', FacebookUserSchema)
