/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 *

 */

const { getResourceById } = require('../db/queries/resource')

const express = require('express');
const router  = express.Router();

router.get('/:id', (req, res) => {
  const resource = req.params.id;
  getResourceById(resource)
  .then((resourceData) => {
    const templateVars = {'resource': resourceData[0]};
    console.log('resource data: ',resourceData[0])
    res.render('resource', templateVars);
  }).catch((error) => {
    console.log('there is an error: ', error)
  })
});

module.exports = router;
