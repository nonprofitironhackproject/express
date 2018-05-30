const express = require('express');
const router = express.Router();
const User = require('../models/user'); // User model
const ProfileModel = require('../models/profile'); // Profile model

router.get('/userinfo', (req, res, next) => {

    if (!req.user) {
        res.redirect("/");
        // (prevents the rest of the code from running)
        return;
    }

    ProfileModel
        .find(
            {
                user_id: req.user._id 
            }
        )
        .exec((err, profileResults) => {
            if (err) {
                console.log('Error finding entries', err);
                res.status(500).json({ errorMessage: 'Finding entries went wrong' });
                return;
            }
            res.status(200).json(profileResults);
        });
});

router.post('/edit', (req, res, next) => {

    if (!req.user) {
        res.redirect("/");
        return;
    }
    
    ProfileModel.findOne({user_id: req.user._id}) 
    .then((theProfile) => {
        theProfile.name         = req.body.name;
        theProfile.age          = req.body.age;
        theProfile.aboutUser    = req.body.aboutUser;
        theProfile.email        = req.body.email;
        theProfile.phone        = req.body.phone;
        theProfile.facebook     = req.body.facebook;
        theProfile.linkedin     = req.body.linkedin;
        theProfile.volunteerExperience = req.body.volunteerExperience;

        theProfile.save()
        .then(() => {
            console.log(theProfile);
            res.status(200).json(ProfileModel);
        })
        .catch((error) => {
            console.log(error);
            next(error);
        });
    });
});
module.exports = router;