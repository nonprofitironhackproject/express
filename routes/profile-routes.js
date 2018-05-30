const express = require('express');
const router = express.Router();
const User = require('../models/user'); // User model
const ProfileModel = require('../models/profile'); // Profile model

router.get('/profile', (req, res, next) => {

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
        theProfile.name            = req.body.name;
        // theProfile.age          = req.body.age;
        // theProfile.aboutUser    = req.body.aboutUser;
        // theProfile.email        = req.body.email;
        // theProfile.phone        = req.body.phone;
        // theProfile.facebook     = req.body.facebook;
        // theProfile.linkedin     = req.body.linkedin;
        // theProfile.volunteerExperience = req.body.volunteerExperience;

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


// // Get details about a sepcific user.
// router.get('/:username', (req, res, next) => {
//     User.findById(req.params.user_id)
//         .then((theUser) => {
//             res.json(theUser);
//         })
//         .catch((err) => {
//             res.json(err);
//         });
// });

// // Add new profile information.
// router.post('/edit/:username', (req, res, next) => {
//     console.log(req.body);
//     const profile = {
//         name: req.body.name,
//         aboutUser: req.body.aboutUser,
//         experience: req.body.experience,
//         skills: req.body.skills,
//         email: req.body.email,
//         phone: req.body.phone,
//         linkedin: req.body.linkedin,
//         facebook: req.body.facebook
//     };
//     Profile.create(profile)
//         .then((profileInfo) => {
//             console.log(profileInfo);
//             res.json(profileInfo);
//         })
//         .catch((err) => {
//             res.json(err);
//         });
// });

// router.post('/profile/update/:username', function (req, res) {
//     // User.findByIdAndUpdate(req.params.username, {
//     // })
//     //     .then(response => {
//     //         res.redirect(`/profile/${req.params.username}`)
//     //     })
//     //     .catch(theError => {
//     //         console.log(theError);
//     //     });

// });


module.exports = router;