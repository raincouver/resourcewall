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

router.post("/like/:id", (req, res) => {

  const data = {
                  'resource_id':req.params.id,
                  'user_id':req.session.userSessionID
                }
                
  resourceQueries.checkIfLiked(data)
  .then(response => {
    const foundLikes = response[0];
    if (!foundLikes) {
      resourceQueries.likeResource(data);
    }
  })

  // res.redirect('/users');
});

router.post("/rate/:id", (req, res) => {

  const data = {
                  'resource_id': req.params.id,
                  'user_id': req.session.userSessionID,
                  'rating': req.body.rating
                };

  resourceQueries.rateResource(data);
  // res.redirect('/users');
});
module.exports = router;
