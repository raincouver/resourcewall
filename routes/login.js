/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');

router.use((req, res, next) => {
  console.log(req.url, '@login@', Date.now());
  next();
})

router.get('/', (req, res, next) => {
  //if user already logged in direct to user home page

  //Otherwise continue to log in page
  res.render('login');
}); 

// POST /LOGIN
router.post('/', (req, res, next) => {
  console.log(req.body);
  // const email = req.body.email;
  // const password = req.body.password;

  //Check if email and password were not provided
  // if (!email || !password) {
  //   return res.status(400).send("<img src='https://http.cat/400'><h1>Please provide email and password!</h1>");
  // }

  // //Look up the user based on their email address
  // let foundUser = helper.getUserByEmail(email, users);

  // console.log(foundUser);
  // // did we Not find a user
  // if (!foundUser) {
  //   return res.status(400).send("<img src='https://http.cat/400'><h1>No user with that email found!</h1>");
  // }

  // // do the passwords NOT match
  // if (!bcrypt.compareSync(password,foundUser.password)) {
  //   return res.status(400).send("<img src='https://http.cat/400'><h1>Passwords do not match!</h1>");
  // }

  //The enetered credentials are correct
  //Set a cookie and then redirect the user
  
  // req.session.userSessionID = foundUser.id;
  // res.cookie('userSessionID', foundUser.id);
  res.redirect('/users');
});

module.exports = router;