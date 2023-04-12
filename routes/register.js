/*
 * All routes for Sign Up are defined here
 * Since this file is loaded in server.js into /signup,
 *   these routes are mounted onto /signup
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const { check_user_emails }= require('../db/queries/check_user_emails');

router.use((req, res, next) => {
  console.log(req.url, '@signup@', Date.now());
  next();
})

// GET 'Register' Route
router.get('/', (req, res) => {
  const userId = req.session.user_id;
  
  // if logged in already, redirect to /users
  if (userId) {
    return res.redirect('/users');
  }

  res.render('register', {user: null});
});



module.exports = router;