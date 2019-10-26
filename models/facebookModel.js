const mongoose = require('mongoose');

const FacebookUserSchema = new mongoose.Schema({
facebookId: String,
email:  String,
name: String,
image:  String

})
mongoose.model('FacebookUser', FacebookUserSchema)
