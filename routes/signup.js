/*
 * All routes for Sing Up are defined here
 * Since this file is loaded in server.js into /signup,
 *   these routes are mounted onto /signup
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');

router.use((req, res, next) => {
  console.log(req.url, '@', Date.now());
  next();
})

router.get('/', (req, res, next) => {
  res.render('signup');
}); 

// GET /signup
router.get('/', (req, res) => {
  
  // // let userSessionID = req.cookies["userSessionID"];
  // let userSessionID = req.session.userSessionID;
  
  // //If the user is not logged in, POST /urls should respond with an HTML message that tells the user why they cannot shorten URLs.
  // if (users[userSessionID]) {
  //   return res.redirect('/urls');
  // }

  res.render('signup');
});


  //If the user is not logged in, POST /urls should respond with an HTML message that tells the user why they cannot shorten URLs.

module.exports = router;