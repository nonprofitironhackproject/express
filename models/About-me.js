const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const AboutSchema = new schema ({
  causes: String


}); 

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', UserSchema);