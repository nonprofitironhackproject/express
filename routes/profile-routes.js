const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user'); // User model
const ProfileModel = require('../models/profile'); // Profile model

router.get('/userinfo/:id', (req, res, next) => {

    if ( !req.user){
        return res.status(403).json({message: "Login to see the details."})
    }

    ProfileModel
        .find(
            {
                user_id: req.params.id 
            }
        )
        .exec((err, profileResults) => {
            console.log('inside the exec');
            if (err) {
                console.log('Error finding entries', err);
                res.status(500).json({ errorMessage: 'Finding entries went wrong' });
                return;
            }
            res.status(200).json(profileResults);
        });
});

router.post('/edit', (req, res, next) => {
console.log('hellotest1');
console.log(req.body.name);
console.log(req.user._id);
    if (!req.user) {

        res.status(403).json({message: "You're not allowed here. Log in first."})
        // res.redirect("/");
        return;
    }
    console.log("hellotest2");
    ProfileModel.findOne({_id: req.user.email}) 
    .then((theProfile) => {
        console.log(req.body);
        console.log(theProfile);
        theProfile.name         = req.body.name;
        theProfile.age          = req.body.age;
        theProfile.aboutUser    = req.body.aboutUser;
        theProfile.email        = req.body.email;
        theProfile.phone        = req.body.phone;
        theProfile.facebook     = req.body.facebook;
        theProfile.linkedin     = req.body.linkedin;
        theProfile.twitter      = req.body.twitter;
        theProfile.volunteerExperience = req.body.volunteerExperience;


        // Contact.findById(id, (err, contact) => { if (err) { res.status(500).send(err); } else { res.json(contact); } });



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
