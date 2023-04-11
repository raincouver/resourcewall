/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');


router.use((req, res, next) => {
  console.log(req.url, '@usersAPI@', Date(Date.now()));
  next();
})

router.get('/userinfo', (req, res) => {

  userQueries.getUserInfo()
  .then(data => {
    res.json({data});
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });

});

router.get('/user-myurls', (req, res) => {

  userQueries.getUserMyUrls()
  .then(data => {
    res.json({data});
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });

});

router.get('/user-likedurls', (req, res) => {

  userQueries.getUserLikedUrls()
  .then(data => {
    res.json({data});
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });

});
module.exports = router;
