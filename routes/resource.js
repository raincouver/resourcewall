/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 *

 */

const { getResourceById, getUserLikes } = require('../db/queries/resource')

const express = require('express');
const router  = express.Router();

router.get('/:id', (req, res) => {
  const resource = req.params.id;

  let userSessionID = req.session.userSessionID;

  if (!userSessionID) {
    return res.redirect('/login');
  }

  getResourceById(resource)
  .then((resourceData) => {
    console.log('resourceData: ', resourceData);

      const templateVars = {
        'resource': resourceData[0]
      };

      console.log('templateVars: ', templateVars)
      res.render('resource', templateVars);
  })
  .catch((error) => {
    console.log('Getting resource error: ', error)
  })
});

module.exports = router;
