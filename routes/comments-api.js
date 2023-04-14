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
  console.log(req.url, '@commentsAPI@', Date(Date.now()));
  next();
})

router.get('/:id', (req, res) => {

  let userSessionID = req.session.userSessionID;

  if (!userSessionID) {
    return res.redirect('/login');
  }

  console.log('reqParams: ', req.params)
  userQueries.getCommentsById(req.params.id)
  .then(resource => {
    res.json({resource});
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
});


router.post('/:id', (req, res) => {

  let userSessionID = req.session.userSessionID;

  if (!userSessionID) {
    return res.redirect('/login');
  }
  
  const userID = req.session.userSessionID;
  userQueries.addComment(userID, req.params.id, req.body['comment-text'])
  .then(comment => {
    res.json({comment});
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });

});

module.exports = router;
