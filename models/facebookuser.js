const mongoose = require('mongoose');
const { Schema } = mongoose.Schema

const FacebookUserSchema = new Schema({
facebookId: String
})

const FacebookUser = mongoose.model('FacebookUser', FacebookUserSchema)
module.exports = FacebookUser;
