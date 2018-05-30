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
                user_id: req.user._id // Finds specific entries belonging to logged in user, 
                // instead of showing "All" entries for ALL users on his dashboard.
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
        // (prevents the rest of the code from running)
        return;
    }
    console.log('request', req);
console.log('request body', req.body);

    ProfileModel.findOne({ user_id: req.user._id })
        .exec((err, theProfile) => {
            theProfile.name = req.body.name;
            theProfile.age = req.body.age;
            theProfile.aboutUser = req.body.aboutUser;
            theProfile.email = req.body.email;
            theProfile.phone = req.body.phone;
            theProfile.facebook = req.body.facebook;
            theProfile.linkedin = req.body.linkedin;
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


// same as above
// Adventure.findOne({ type: 'iphone' }).exec(function (err, adventure) { });

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
































// const express = require('express');
// const router = express.Router();
// const User = require('../models/user'); // User model
// const ProfileModel = require('../models/profile'); // Profile model

// router.get('/profile', (req, res, next) => {

//     if (!req.user) {
//         res.redirect("/");
//         // (prevents the rest of the code from running)
//         return;
//     }

//     ProfileModel
//         .find(
//             {
//                 user_id: req.user._id // Finds specific entries belonging to logged in user, 
//                 // instead of showing "All" entries for ALL users on his dashboard.
//             }
//         )
//         .exec((err, profileResults) => {
//             if (err) {
//                 console.log('Error finding entries', err);
//                 res.status(500).json({ errorMessage: 'Finding entries went wrong' });
//                 return;
//             }

//             res.status(200).json(profileResults);
//         });
// });

// // Add new profile information.
// router.post('/edit/:username', (req, res, next) => {
//     console.log(req.body);
//     const profile = {
//         name: req.body.name,
//         aboutUser: req.body.aboutUser,
//         experience: req.body.experience,
//         cause: req.body.cause,
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
// router.post('/edit', (req, res, next) => {
    
//     if (!req.user) {
//         res.redirect("/");
//         // (prevents the rest of the code from running)
//         return;
//     }
    
//     ProfileModel.findOne({user_id: req.user._id}) 
//     .then((theProfile) => {
//         theProfile.name         = req.body.name;
//         theProfile.age          = req.body.age;
//         theProfile.aboutUser    = req.body.aboutUser;
//         theProfile.email        = req.body.email;
//         theProfile.phone        = req.body.phone;
//         theProfile.facebook     = req.body.facebook;
//         theProfile.linkedin     = req.body.linkedin;
//         theProfile.volunteerExperience = req.body.volunteerExperience;

//         theProfile.save()
//         .then(() => {
//             console.log(theProfile);
//             res.status(200).json(ProfileModel);
//         })
//         .catch((error) => {
//             console.log(error);
//             next(error);
//         });
//     });
// });

// router.post('/edit/:username', (req, res, next) => {
// console.log(req.params.user_id)

// })

// router.post('/profile/update/:username', function (req, res) {
//     // User.findByIdAndUpdate(req.params.username, {
//     // })
//     //     .then(response => {
//     //         res.redirect(`/profile/${req.params.username}`)
//     //     })
//     //     .catch(theError => {
//     //         console.log(theError);
//     //     });
//     console.log(req.body)
//     Task.findByIdAndUpdate(req.params.id, req.body)
//     .then((updatedTask)=>{
//       res.json(updatedTask)
//     })
//     .catch((err)=>{
//       res.json(err)
//     })

//   });

//         });
//     });

// // // Get details about a sepcific user.
// // router.get('/:username', (req, res, next) => {
// //     User.findById(req.params.user_id)
// //         .then((theUser) => {
// //             res.json(theUser);
// //         })
// //         .catch((err) => {
// //             res.json(err);
// //         });
// // });

// // // Add new profile information.
// // router.post('/edit/:username', (req, res, next) => {
// //     console.log(req.body);
// //     const profile = {
// //         name: req.body.name,
// //         aboutUser: req.body.aboutUser,
// //         experience: req.body.experience,
// //         skills: req.body.skills,
// //         email: req.body.email,
// //         phone: req.body.phone,
// //         linkedin: req.body.linkedin,
// //         facebook: req.body.facebook
// //     };
// //     Profile.create(profile)
// //         .then((profileInfo) => {
// //             console.log(profileInfo);
// //             res.json(profileInfo);
// //         })
// //         .catch((err) => {
// //             res.json(err);
// //         });
// // });

// // router.post('/profile/update/:username', function (req, res) {
// //     // User.findByIdAndUpdate(req.params.username, {
// //     // })
// //     //     .then(response => {
// //     //         res.redirect(`/profile/${req.params.username}`)
// //     //     })
// //     //     .catch(theError => {
// //     //         console.log(theError);
// //     //     });

// // });


        
//                 module.exports = router;
