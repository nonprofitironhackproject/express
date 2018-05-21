const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const ProfileSchema = new Schema ({
  causes: String,
  image: String,
  about: String, 
  age: Number,
  gender: {
    type: String,
    enum : ['MALE', 'FEMALE', 'PREFER NOT TO SAY'],
    default : 'PREFER NOT TO SAY'
  }
}); 

ProfileSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('profile', ProfileSchema);