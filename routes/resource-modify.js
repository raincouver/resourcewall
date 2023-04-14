/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const resourceQueries = require('../db/queries/resource-modify');
const dbQueries = require('../db/queries/resource'); 
const bcrypt = require("bcrypt");

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



router.get("/like/:id", (req, res) => {

  const data = {
                  'resource_id':req.params.id,
                  'user_id':req.session.userSessionID
                }
                
  resourceQueries.checkIfLiked(data)
  .then(response => {

    let likeBtn = {
                    'likeBtnText': 'I LIKED IT ALREADY!',
                    'likeBtnStyle': 'class="btn btn-lg btn-primary" disabled'
                  };

    if (!response[0]) {

      likeBtn = {
                  'likeBtnText': 'I LIKE IT!',
                  'likeBtnStyle': 'class="btn btn-lg btn-primary"'
                };

    }

    res.json({likeBtn});
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
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
  });

  res.redirect(`/resource/${req.params.id}`);
});



router.post("/rate/:id", (req, res) => {
  console.log('req.body.rating', req.body.rating)
  console.log('req.session.userSessionID', req.session.userSessionID);
  console.log('req.params.id', req.params.id);
  const data = {
                  'resource_id': req.params.id,
                  'user_id': req.session.userSessionID,
                  'rating': req.body.rating
                };
  resourceQueries.checkIfRated(data)
  .then(response => {
    
    if (!response[0]) {
      dbQueries.addRating(data);
      console.log('Rating added to db')
    }
  });

  res.redirect(`/resource/${req.params.id}`);
});



router.get("/rate/:id", (req, res) => {

  const data = {
                  'resource_id':req.params.id,
                  'user_id':req.session.userSessionID
                }
                
  resourceQueries.checkIfRated(data)
  .then(response => {

    let rateBtn = {
                    'rateBtnStatus': true,
                  };

    if (!response[0]) {

      rateBtn = {
                  'rateBtnStatus': false,
                };

    }

    res.json({rateBtn});
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
});

router.post("/newRandomAvatar/:id", (req, res) => {

  const karma = Math.floor(Math.random() * 8) + 1;
  const profile_photo = `'/images/trimmed/avatar${karma}.PNG'`;

  const data = {
    'newAvatarPath': profile_photo,
    'user_id': req.params.id
  };

  resourceQueries.newRandomAvatar(data)
    .then(
      res.redirect('/users')
    )
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

});

router.post("/changepwd/:id", (req, res) => {

  const password = req.body.newPwd;

  //Check if email and password were not provided
  if (!password) {
    return res.status(400).send("<img src='https://http.cat/400'><h1>Please provide a new password!</h1>");
  }

  const data = {
    'newPwd': bcrypt.hashSync(password, 10),
    'user_id': req.params.id
  };

  resourceQueries.changePwd(data)
    .then(
      res.redirect('/users')
    )
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

});

router.post("/changeUserName/:id", (req, res) => {

  const username = req.body.newName;

  //Check if email and password were not provided
  if (!username) {
    return res.status(400).send("<img src='https://http.cat/400'><h1>Please provide a new name!</h1>");
  }

  const data = {
    'newName': username,
    'user_id': req.params.id
  };

  resourceQueries.changeUserName(data)
    .then(
      res.redirect('/users')
    )
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

});



module.exports = router;
