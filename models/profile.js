const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const ProfileSchema = new Schema ({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  profileImage: String,
  backgroundImage: String,
  name: String,
  aboutUser: String, 
  age: Number,
  gender: {
    type: String,
    enum : ['MALE', 'FEMALE', 'PREFER NOT TO SAY'],
    default : 'PREFER NOT TO SAY'
  },
  volunteerExperience: [{
    type: String, 
    detail: {
      position: String,
      dates: String,
      location: String,
      responsibilities: [{type: String}],
      description: String,
    }
  }],
  causes: [{
    type: String,
    enum: [
    'Community',
    'Children & Youth',
    'Education & Literacy',
    'Arts & Culture',
    'Environment',
    'Computers & Technology',
    'Politics',
    'LGBTQ',
    'Women',
    'Health & Medicine',
    'Advocacy & Human Rights',
    'Seniors',
    'Disabled',
    'Homeless & Housing',
    ]
  }],
  skills: [{
    type: String,
    enum: [
    'Computer and Internet Skills',
    'Computer Programming',
    'Written and Verbal Communication',
    'Organizational Skills',
    'Multi-tasking',
    'Time Management',
    'Analytical',
    'Adaptable',
    'Quick Learner',
    'Able to Build Relationships',
    'Loyal and Discreet',
    'Flexible',
    'Responsible',
    'Efficient',
    'Detail-oriented',
    'Communication',
    'Ability to Work Under Pressure',
    'Self-motivation',
    'Conflict Resolution',
    'Leadership',
    'Teamwork',
    'Creativity',
    'Data Analysis',
    'Copywriting',
    'Foreign Languages',
    'Accounting',
    'Graphic Design',
    'Planning / Event Planning',
    'SEO / SEM Marketing',
    'Bookkeeping'
    ]
  }]
}); 

ProfileSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('profile', ProfileSchema);