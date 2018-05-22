const express     = require('express');
const authRoutes  = express.Router();
const passport    = require('passport');
const User        = require('../models/user'); // User model
const flash       = require('connect-flash');
const ensureLogin = require('connect-ensure-login');

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

authRoutes.post("/signup", (req, res, next) => {
  const email    = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  if (email === "" || username === "" || password === "") {
    res.status(400).json({ message: 'Provide email, username and password' });
    return;
  }

  User.findOne({ username:username }, "username", (err, user) => {
    if (user !== null) {
      res.status(400).json({ message: 'Username already exists' });
      return;
    }

  // User.findOne({ email:email }, "email", (err, user) => {
  //   if (email !== null) {
  //     res.status(400).json({ message: 'Email already exists' })
  //     return;
  //   }
    
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const theUser = new User({
      email:    email,
      username: username,
      password: hashPass
    });

    theUser.save((err) => {
      if (err) {
        console.log('Error saving user ', err);
        res.status(400).json({ message: 'Error saving user' });
        return;
      } 

      req.login(theUser, (err) => {
        if (err) {
          console.log('Error logging in ', err);
          res.status(500).json({ message: 'Error logging in' });
          return;
        }

        res.status(200).json(req.user);
      });
    });
  });
});

authRoutes.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) {
      res.status(500).json({ message: 'Something went wrong' });
      return;
    }

    if (!theUser) {
      res.status(401).json(failureDetails);
      return;
    }

    req.login(theUser, (err) => {
      if (err) {
        res.status(500).json({ message: 'Something went wrong' });
        return;
      }

      // We are now logged in (notice req.user)
      res.status(200).json(req.user);
    });
  })(req, res, next);
});

authRoutes.post('/logout', (req, res) => {
  req.logout();
  res.status(200).json({message: 'Success'});
});


authRoutes.get('/loggedin', (req, res, next) => {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: 'Unauthorized' });
});


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {

    res.redirect('/login')
  }
}

// function checkRoles(role) {
//   return function(req, res, next) {
//     if (req.isAuthenticated() && req.user.role === role) {
//       return next();
//     } else {
//       res.redirect('/')
//     }
//   }
// }

// authRoutes.get('/private', (req, res, next) => {
//   if (req.isAuthenticated()) {
//     res.json({ message: 'This is a private message' });
//     return;
//   }

//   res.status(403).json({ message: 'Unauthorized' });
// });


// authRoutes.get('/auth/google', passport.authenticate('google', {
//   scope: ['https://www.googleapis.com/auth/plus.login',
//           'https://www.googleapis.com/auth/plus.profile.emails.read']
// }));

// authRoutes.get('/auth/google/callback', passport.authenticate('google', {
//   failureRedirect: '/',
//   successRedirect: '/private-page'
// }));

module.exports = authRoutes;