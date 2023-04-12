/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const { getCategoryInfoById } = require('../db/queries/categories')


router.get('/:id', (req, res) => {
  const category = req.params.id
  getCategoryInfoById(category)
  .then((categoryData) => {
    const templateVars = {'category': categoryData};
    console.log('category data: ',templateVars)
    res.render('category', templateVars);
  }).catch((error) => {
    console.log('there is an error: ', error)
  })
});
module.exports = router;
