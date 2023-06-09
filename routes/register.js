const express = require('express');
const router  = express.Router();
const loginQueries = require('../db/queries/login');
const resourceQueries = require('../db/queries/resource-modify');
const bcrypt = require("bcrypt");


router.use((req, res, next) => {
  console.log(req.url, '@signup@', Date(Date.now()));
  next();
})

// GET 'Register' Route
router.get('/', (req, res) => {

  const userSessionID = req.session.userSessionID;
  // if logged in already, redirect to /users
  if (userSessionID) {
    return res.redirect('/users');
  }

  //Otherwise continue to log in page
  res.render('register');
});

// POST 'Register' Route
router.post('/', (req, res) => {

  const name = req.body.registerName;
  const email = req.body.registerEmail;
  const password = req.body.registerPassword;

  console.log(email);

  //Check if email and password were not provided
  if (!email || !name || !password) {
    return res.status(400).send("<img src='https://http.cat/400'><h1>All entires are required!</h1>");
  }

  //Look up the user based on their email address
  loginQueries.getUserByEmail(email)
    .then((results) => {
      const foundUser = results[0];
      console.log('xxxxxxxxx',results);

      if (foundUser) {
        return res.status(400).send("<img src='https://http.cat/400'><h1>Email already registered! Please log in.</h1>");
      }

      const karma = Math.floor(Math.random() * 8) + 1;
      const profile_photo = `'/images/trimmed/avatar${karma}.PNG'`;
      const hashed_password = bcrypt.hashSync(password, 10);

      const newUser = {
        'name': name,
        'email': email,
        'password': hashed_password,
        'avatar': profile_photo
      };

      loginQueries.registerNewUser(newUser)
        .then((thisresults) => {

          console.log('xxxxxxxxx',thisresults);
          const Input = {
            'resource_id': 9,
            'user_id': thisresults[0].id
          };

          resourceQueries.likeResource(Input)
            .then(
              res.redirect('/login')
            )
            .catch((err) => {
              console.error('Error Liking resource wall:', err);
              res.status(500).send(err);
            });
        });
    })
    .catch((err) => {
      console.error('Error Signing up:', err);
      res.status(500).send(err);
    });

});

module.exports = router;