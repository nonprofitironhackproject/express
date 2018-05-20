require('dotenv').config();

<<<<<<< HEAD
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

// Models
const User         = require('./models/user');
=======
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');


>>>>>>> 5b70e726f69827d472c5f08d03ed1a5ecdc1a499

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/irongenerate-express', {useMongoClient: true})
  .then(() => {
<<<<<<< HEAD
    console.log('Connected to Mongo!')
=======
    console.log('Connected to Mongo!');
>>>>>>> e926174c08127baaf324943c9ca05ff81bcf8a72
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

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
app.locals.title = 'Super Awesome Non-profit Portal';

const index = require('./routes/index');
app.use('/', index);

module.exports = app;
