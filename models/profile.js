const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const ProfileSchema = new Schema ({
  causes: String,
  image: String,
  about: String, 
  age: Number,
<<<<<<< HEAD
  gender: String,
=======
  gender: {
    type: String,
    enum : ['MALE', 'FEMALE', 'PREFER NOT TO SAY'],
    default : 'PREFER NOT TO SAY'
  }
>>>>>>> a36b8a50e1bbf3b70f03e575a8ad45618f938955
}); 

ProfileSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('profile', ProfileSchema);