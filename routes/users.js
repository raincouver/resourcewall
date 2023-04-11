/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');

router.use((req, res, next) => {
  console.log(req.url, '@users@', Date.now());
  next();
})

router.get('/', (req, res) => {
  // userQueries.getUserInfo()
  //   .then(userInfo => {
  //     res.json({ userInfo });
  //   })
  //   .catch(err => {
  //     res
  //       .status(500)
  //       .json({ error: err.message });
  //   });


      // const templetVars = {
      //   'userMyUrls' : userMyUrls
      // }

    //   userQueries.getUserLikedUrls()
    //     .then(usersLikedUrls => {
    //       res.json({ usersLikedUrls });
    //     })
    //     .catch(err => {
    //       res
    //         .status(500)
    //         .json({ error: err.message });
    //     });
  res.render('users');
}); 

router.post("/users/:id/delete", (req, res) => {

  const id = req.params.id;
  delete urlDatabase[id];
  res.redirect('/urls');
});

router.post("/users/:id/dislike", (req, res) => {

  const id = req.params.id;
  delete urlDatabase[id];
  res.redirect('/urls');
});

module.exports = router;
