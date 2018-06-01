require('dotenv').config();

const axios = require("axios");
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const flash = require("connect-flash");
const cors = require("cors");
const app = express();

// Models
const User = require('./models/user');

mongoose.Promise = Promise;
mongoose
  // .connect(process.env.MONGODB_URI, { useMongoClient: true })
  .connect('mongodb://localhost/irongenerate-express', { useMongoClient: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');



// const app_name = require('./package.json').name;
// const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Express View engine setup
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));


app.use(flash());

//passport config area
passport.serializeUser((user, cb) => {
  // console.log("ser: ", user);
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  User.findById(id, (err, user) => {
    // console.log("des: ", user);
    cb(null, user);
  });
});

passport.use(new LocalStrategy({
  passReqToCallback: true

}, (req, username, password, next) => {
  console.log('line73appjs -> ', username)
  User.findOne({ username }, (err, user) => {
    console.log('line74appjs -> ',user)
    if (err) {
      return next(err);
    }
    if (!user) {
      return next(null, false, { message: "Incorrect username" });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return next(null, false, { message: "Incorrect password" });
    }

    return next(null, user);
  });
})); // end passport config area

app.use(session({
  secret: "qwertyuiougfdcvbnmklplkmn",
  resave: false,
  saveUninitialized: false, // Only creates cookies if a user is logged in.
  // cookie: { maxAge: 7200000 },
  // store: sessionStore,
}));

app.use(passport.initialize());
app.use(passport.session());


app.use(
  cors({
    credentials: true,                 // allow other domains to send cookies
    origin: ["http://localhost:4200"]  // these are the domains that are allowed
  })
);

// ===================== Routes =====================
const profile = require('./routes/profile-routes');
app.use('/profile', profile);

const user = require('./routes/auth-routes');
app.use('/api', user);


// app.use((req, res, next)  => {
//   res.sendfile(__dirname + './public/angular/index.html');
// });

// const user = require('./routes/auth-routes');
// app.use('/api', login);

// const authAPI = require('./routes/auth-routes');
// app.use('/api', authAPI);


// ====================================================

app.use((req, res, next) => {
  res.sendfile(__dirname + `/public/angular/index.html`);
});


module.exports = app;
