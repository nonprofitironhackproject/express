require('dotenv').config();

const axios          = require("axios");
const express        = require('express');
const bodyParser     = require('body-parser');
const cookieParser   = require('cookie-parser');
const favicon        = require('serve-favicon');
const hbs            = require('hbs');
const mongoose       = require('mongoose');
const logger         = require('morgan');
const path           = require('path');
const passport       = require("passport");
const LocalStrategy  = require("passport-local").Strategy;
const bcrypt         = require("bcrypt");
const session        = require("express-session");
const flash          = require("connect-flash");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const cors           = require("cors");
const app            = express();

// Models
const User         = require('./models/user');

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/irongenerate-express', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup
app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
// default value for title local
app.locals.title = 'Non-profit Portal';
<<<<<<< HEAD
=======

app.use(flash());

//passport config area
passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  User.findById(id, (err, user) => {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

passport.use(new LocalStrategy({
  passReqToCallback: true
  
}, (req, username, password, next) => {
  User.findOne({ username }, (err, user) => {
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
  secret: "our-passport-local-strategy-app",
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(
      cors({
          credentials: true,                 // allow other domains to send cookies
          origin: ["http://localhost:4200"]  // these are the domains that are allowed
        })
      );


>>>>>>> 0682c596cea214c0ee51debfe003a745aab4bbff

const index = require('./routes/index');
app.use('/', index);

const user = require('./routes/auth-routes');
app.use('/api', login);

<<<<<<< HEAD

module.exports = signup;
=======
const authAPI = require('./routes/auth-routes');
app.use('/api', authAPI);

module.exports = app;
>>>>>>> 0682c596cea214c0ee51debfe003a745aab4bbff
