const express = require('express');
const router  = express.Router();

//POST /logout
router.post('/', (req, res) => {

  req.session = null;

  //redirect the user
  res.redirect('/login');
});

module.exports = router;