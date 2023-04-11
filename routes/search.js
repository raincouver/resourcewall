const express = require('express');
const router  = express.Router();
const { searchAllResources } = require('../db/queries/searchAllResources');

router.get('/', (req, res) => {
  res.render('search');
});

router.get('/term/:term', (req, res) => {
  const searchTerm = req.params.term;
  
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