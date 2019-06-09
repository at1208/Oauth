const mongoose = require('mongoose');
const { Schema } = mongoose.Schema

const InstagramUserSchema = new Schema({
instagramId: String
})

const InstagramUser = mongoose.model('InstagramUser', InstgramUserSchema)
module.exports = InstagramUser;
