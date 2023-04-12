/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const addNewQueries = require('../db/queries/addnew');


router.use((req, res, next) => {
  console.log(req.url, '@addnew@', Date(Date.now()));
  next();
})

router.get('/', (req, res) => {
  res.render('addnew');
}); 

router.post('/', (req, res) => {

  console.log(req.body);
  const newUrl = {
    'url':req.body.newUrl,
    'title':req.body.newTitle,
    'description':req.body.newDescription,
  };

  const newCategory = {
    'user_id':req.body.user_id,
    'category':req.body.newTitle
  }

  addNewQueries.addnewResource(newUrl);  
  addNewQueries.addnewCategory(newCategory);
  
  res.redirect('/users');
}); 




module.exports = router;
