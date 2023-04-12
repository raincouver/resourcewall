/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
// load .env data into process.env

const express = require('express');
const router  = express.Router();
const loginQueries = require('../db/queries/login');
const bcrypt = require("bcrypt");

router.get('/', (req, res) => {
  // if user already logged in direct to user home page

  const userSessionID = req.session.userSessionID;

  if (userSessionID) {
    return res.redirect('/users');
  }

  //Otherwise continue to log in page
  res.render('login');
}); 


router.use((req, res, next) => {
  console.log(req.url, '@login@', Date(Date.now()));
  next();
})

// POST /LOGIN
router.post('/', (req, res) => {

  const email = req.body.loginEmail;
  const password = req.body.loginPassword;

  console.log(email);

  //Check if email and password were not provided
  if (!email || !password) {
    return res.status(400).send("<img src='https://http.cat/400'><h1>Please provide email and password!</h1>");
  }

  //Look up the user based on their email address
  loginQueries.getUserByEmail(email)
    .then((results) => {
      const foundUser = results[0];

      if (!foundUser) {
        return res.status(400).send("<img src='https://http.cat/400'><h1>Email or password does not match our records!</h1>");
      }

      if (!bcrypt.compareSync(password, foundUser.password)) {
        return res.status(400).send("<img src='https://http.cat/400'><h1>Email or password does not match our records!</h1>");
      }

      req.session.userSessionID = foundUser.id;

      res.redirect('/users');
    })
    .catch((err) => {
      console.error('Error logging in:', err);
      res.status(500).send(err);
    });

});


module.exports = router;