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

  // if user already logged in 
  // if not direct to login page

  let userSessionID = req.session.userSessionID;

  if (!userSessionID) {
    return res.redirect('/login');
  }

  res.render('addnew');
}); 



router.post('/', (req, res) => {

  const newCategory = req.body.newTag;

  console.log(newCategory);

  addNewQueries.addnewCategory(newCategory)
  .then(() => {
    addNewQueries.getCategoryID(newCategory)
      .then(data => {

        const newUrl = {
          'user_id': req.session.userSessionID,
          'category_id': data[0].id,
          'url': req.body.newUrl,
          'title': req.body.newTitle,
          'description': req.body.newDescription,
        };
        console.log(newUrl);

        addNewQueries.addnewResource(newUrl);
      })
      .catch((err) => {
        console.error('Error adding resource:', err);
        res.status(500).send(err);
      })
  })
  res.redirect('/users');
}); 


module.exports = router;
