const express = require('express');

const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
  db('cars')
  .then(cars => {
    res.status(200).json({ cars });
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to retrieve cars' });
  });
});

router.post('/', (req, res) => {
  const carData = req.body;

  db('cars').insert(carData)
    .then(ids => {
      db('cars').where({ id: ids[0] })
        .then(newCarEntry => {
          res.status(201).json(newCarEntry);
        });
    })
    .catch(err=> {
      res.status(500).json({ message: 'Failed to store data' });
    });
});


module.exports = router;