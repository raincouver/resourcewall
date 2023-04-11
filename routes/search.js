const express = require('express');
const router  = express.Router();
const { searchAllResources } = require('../db/database');

router.get('/', (req, res) => {
  res.render('search');
});

router.post('/', (req, res) => {
  const searchTerm = req.body.searchTerm;

  console.log('Search term:', searchTerm) // debugging 
  
  searchAllResources(`%${searchTerm}%`)
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
    });
});

module.exports = router;