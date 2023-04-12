// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cookieSession = require('cookie-session')
const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));

// Cookie session middleware 
app.use(cookieSession({
  name: 'session',
  keys: ['secret'],  
}));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own

const resourceModify = require('./routes/resource-modify');
// const userSignupRoutes = require('./routes/signup');
// const resourceApiRoutes = require('./routes/resource-api');
const userRegisterRoutes = require('./routes/register');
const userLoginRoutes = require('./routes/login');
const addNewRoutes = require('./routes/addnew');
const categoryRoutes = require('./routes/category');
const resourceRoutes = require('./routes/resource');
const usersRoutes = require('./routes/users');
const usersApiRoutes = require('./routes/users-api');
const searchRoutes = require('./routes/search');
const commentsRoutes = require('./routes/comments-api')

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/resource-modify', resourceModify);
// app.use('/resource-api', resourceApiRoutes);
app.use('/resource', resourceRoutes);
app.use('/category', categoryRoutes);
app.use('/addnew', addNewRoutes);
app.use('/login', userLoginRoutes);
app.use('/register', userRegisterRoutes);
app.use('/users', usersRoutes);
app.use('/users-api', usersApiRoutes);
app.use('/search', searchRoutes);
app.use('/comments-api', commentsRoutes);
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get('/', (req, res) => {

  // if user not logged in redirect to sign up / log in pages

  //if user logged in direct to user home page
  res.render('login');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
