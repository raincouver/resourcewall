/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
// load .env data into process.env

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');

router.use((req, res, next) => {
  console.log(req.url, '@login@', Date.now());
  next();
})

router.get('/', (req, res) => {
  //if user already logged in direct to user home page
  // userQueries.getUsers();  
  // userQueries.getUserInfo()
  //   .then(userInfo => {
  //     res.json({ userInfo });
  //   })
  //   .catch(err => {
  //     res
  //       .status(500)
  //       .json({ error: err.message });
  //   });

  //Otherwise continue to log in page
  res.render('login');
}); 

// POST /LOGIN
router.post('/', (req, res, next) => {
  console.log(req.body);


  res.redirect('/users');
});

module.exports = router;