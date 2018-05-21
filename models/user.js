const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const User = mongoose.model("User", userSchema);

const UserSchema = new Schema({
    email: String,
    username: String,
    password: String,    
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});
    
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', UserSchema);