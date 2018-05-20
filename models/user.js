const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    username: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String,
});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', UserSchema);