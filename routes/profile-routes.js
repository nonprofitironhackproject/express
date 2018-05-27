// const express     = require('express');
// const router      = express.Router();
// const User        = require('../models/user'); // User model
// const Profile     = require('../models/profile'); // Profile model

// module.exports = router;

const express     = require('express');
const router      = express.Router();
const User        = require('../models/user'); 
const Profile     = require('../models/profile'); 
const loggedIn    = require('../../utils/isAuthenticated');

router.get('/', (req, res, next) => {
    Profile
        .find({user_id})
        .populate('_author replies._author')
        .exec((err, threads) => {
            if (err) { return res.status(500).json(err); }

            return res.status(200).json(threads);
        });
});

router.post('/', loggedIn, (req, res, next) => {
    const newThread = new Thread({
        _author: req.user._id,
        title: req.body.title,
        content: req.body.content
        // profileImage: req.body.profileImage,
        // backgroundImage: req.body.backgroundImage,
        // firstName: req.body.firstName,
        // lastName: req.body.lastName,
        // aboutUser: req.body.aboutUser,
        // age: req.body.age,
        // gender: req.body.gender,
        // volunteerExperience
    });

    newThread.save((err) => {
        if (err) { return res.status(500).json(err); }
        if (newThread.errors) { return res.status(400).json(newThread); }

        return res.status(200).json(newThread);
    });
});


module.exports = router;