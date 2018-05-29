const express = require('express');
const router = express.Router();
const User = require('../models/user'); // User model
const Profile = require('../models/profile'); // Profile model

// Get details about a sepcific user.
router.get('/:username', (req, res, next) => {
    User.findById(req.params.user_id)
        .then((theUser) => {
            res.json(theUser);
        })
        .catch((err) => {
            res.json(err);
        });
});

// Add new profile information.
router.post('/edit/:username', (req, res, next) => {
    console.log(req.body);
    const profile = {
        name: req.body.name,
        aboutUser: req.body.aboutUser,
        experience: req.body.experience,
        skills: req.body.skills,
        email: req.body.email,
        phone: req.body.phone,
        linkedin: req.body.linkedin,
        facebook: req.body.facebook
    };
    Profile.create(profile)
        .then((profileInfo) => {
            console.log(profileInfo);
            res.json(profileInfo);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.post('/profile/update/:username', function (req, res) {
    // User.findByIdAndUpdate(req.params.username, {
    // })
    //     .then(response => {
    //         res.redirect(`/profile/${req.params.username}`)
    //     })
    //     .catch(theError => {
    //         console.log(theError);
    //     });

});


module.exports = router;