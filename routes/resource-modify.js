/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const resourceQueries = require('../db/queries/resource-modify');

router.use((req, res, next) => {
  console.log(req.url, '@resource-modify@', Date.now());
  next();
})


router.post("/delete/:id", (req, res) => {

  const id = req.params.id;
  resourceQueries.deleteResource(id);
  res.redirect('/users');
});

router.post("/dislike/:id", (req, res) => {

  const id = req.params.id;
  resourceQueries.dislikeResource(id);
  res.redirect('/users');
});


module.exports = router;
