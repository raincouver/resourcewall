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
  console.log(req.url, '@users@', Date.now());
  next();
})

router.get('/', (req, res) => {

  // const id = req.session.userSessionID;
  // console.log(id);

  // userQueries.getUserInfo(`%${id}%`);

  res.render('users');
}); 

module.exports = router;
