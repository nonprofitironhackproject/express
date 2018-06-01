const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user"); // User model
const ProfileModel = require("../models/profile"); // Profile model
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

//============ SIGNUP ================
router.post("/signup", (req, res, next) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  if (email === "" || username === "" || password === "") {
    res.status(400).json({ message: "Provide email, username and password" });
    return;
  }

  User.findOne({ email }, "email", (err, user) => {
    if (user !== null) {
      res.status(400).json({ message: "Username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      email,
      username,
      password: hashPass
    });

    newUser.save(err => {
      if (err) {
        console.log("Error saving user ", err);
        res.status(400).json({ message: "Error saving user" });
        return;
      }

      req.login(newUser, err => {
        if (err) {
          console.log("Error logging in ", err);
          res.status(500).json({ message: "Error logging in" });
          return;
        }

        res.status(200).json(newUser);
      });

      const newProfile = new ProfileModel({
        user_id: req.user._id
      });

      newProfile.save(err => {
        console.log("------------------new profile");
        console.log(newProfile);
        if (err) {
          console.log("Error saving profile ", err.message);
          res.status(400).json({ message: "Error saving profile." });
          return;
        }
      });
    });
  });
});

//============ LOGIN ===================
router.post("/login", passport.authenticate("local"), (req, res, next) => {
  // console.log(req.user);
  res.json(req.user);
  // this.router.navigate(['profile']);
});

//============ LOGOUT ===================
router.post("/logout", (req, res) => {
  console.log("user in logout backend ", req.user);
  // res.clearCookie('connect.sid', { path: '/profile' });
  req.session.destroy();
  req.logOut();
  console.log("user in logout backend ", req.user);
  // console.log('Inside the logout----------_!');
  res.status(200).json({ message: "Success" });
});

//============ GET USER INFO ===================
router.get("/userInfo", (req, res) => {
  User.findById(req.user, function (err, fullUser) {
    if (err) {
      res.json(fullUser);
      throw err;
    }
  });
});

//============ LOGGEDIN ===================
router.get("/loggedin", (req, res, next) => {
  console.log("user in the backend loggedin route-->", req.user);

  if (req.isAuthenticated()) {
    return res.status(200).json(req.user);
  }

  return res.status(403).json({ message: "Unauthorized" });
});

module.exports = router;
