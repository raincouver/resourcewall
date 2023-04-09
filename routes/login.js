/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('users');
}); 

module.exports = router;

// GET /LOGIN
app.get('/login', (req, res) => {

  // // let userSessionID = req.cookies["userSessionID"];
  // let userSessionID = req.session.userSessionID;
  
  // //If the user is not logged in, POST /urls should respond with an HTML message that tells the user why they cannot shorten URLs.
  // if (users[userSessionID]) {
  //   return res.redirect('/urls');
  // }

  res.render('login');
});

// GET /LOGIN
app.get('/login', (req, res) => {

  res.render('login');
});


// GET /LOGIN
app.get('/login', (req, res) => {

  res.render('login');
});

