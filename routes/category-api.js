/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const categoryQueries = require('../db/queries/categories-post');

router.get('/:name', (req, res) => {

  const categoryName = req.params.name;

  categoryQueries.getUrlByCategoryName(categoryName)
    .then(data => {
      res.json({ data });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.get('/feedback/:id', (req, res) => {

  const id = req.params.id;

  categoryQueries.checkIfFeedbacks(id)
    .then(response => {

      if (!response[0]) {
        
        res.json({  "data": [{ "likes": "n/a", "ratings": "n/a" }]  });
      }

      if (response[0]) {
        categoryQueries.getFeedbacksByResourceID(id)
          .then(data => {
            res.json({ data });
          })
          .catch(err => {
            res
              .status(500)
              .json({ error: err.message });
          });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});
module.exports = router;
