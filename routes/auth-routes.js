const express     = require('express');
const router      = express.Router();
const passport    = require('passport');
<<<<<<< HEAD
const User        = require('../models/user'); // User model
// const flash       = require('connect-flash');
const bcrypt      = require("bcrypt"); // Bcrypt to encrypt passwords
=======
const User        = require('../models/user'); 

const bcrypt      = require("bcrypt");
>>>>>>> 4699be5332c0060ae711d737bc618d3968b639b1
const bcryptSalt  = 10;


//============ SIGNUP ================
router.post("/signup", (req, res, next) => {
  const email    = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  if (email === "" || username === "" || password === "") {
    res.status(400).json({ message: 'Provide email, username and password' });
    return;
  }

  User.findOne({ email }, "email", (err, user) => {
    if (user !== null) {
      res.status(400).json({ message: 'Username already exists' });
      return;
    }
    
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      email,
      username,
      password: hashPass
    });

    newUser.save((err) => {
      if (err) {
        console.log('Error saving user ', err);
        res.status(400).json({ message: 'Error saving user' });
        return;
      } 

      req.login(newUser, (err) => {
        if (err) {
          console.log('Error logging in ', err);
          res.status(500).json({ message: 'Error logging in' });
          return;
        }

        res.status(200).json(newUser);
      });
    });
  });
});

//============ LOGIN ===================
router.post('/login', passport.authenticate('local'), (req, res, next) => {
  console.log(req.user);
  res.json(req.user);
});

//============ LOGOUT===================
router.delete('/logout', (req, res) => {
  req.logout();
  // req.session.destroy();
  res.status(200).json({message: 'Success'});
});

router.get('/userInfo', isLoggedIn, (req, res) => {
  User.findById(req.user, function (err, fullUser) {
    if (err) {
      res.json(fullUser);
      throw err;
    }
  });
});

//============ LOGGEDIN ===================
router.get('/loggedin', (req, res, next) => {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: 'Unauthorized' });
});

//============= PRIVATE PAGE ===============

router.get('/private', (req, res, next) => {
  console.log(req.user)
  if (req.isAuthenticated()) {
      res.status(200).json(req.user);
      return;
  }

  res.json({ message: req.isAuthenticated() });
});

function isLoggedIn (req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
        res.json(false);
  }
}


module.exports = router;
