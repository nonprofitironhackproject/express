const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
// const User = mongoose.model('User', UserSchema);

const userSchema = new Schema({
    email: String,
    username: String,
    password: String    
},
{
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const User = mongoose.model("User", userSchema);
userSchema.plugin(passportLocalMongoose);
module.exports = User;
    
