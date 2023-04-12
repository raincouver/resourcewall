/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/resource');


router.use((req, res, next) => {
  console.log(req.url, '@resourceAPI@', Date(Date.now()));
  next();
})

router.get('/resource-api', (req, res) => {

  userQueries.getResourceById()
  .then(resource => {
    res.json({resource});
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });

});
