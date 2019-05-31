const express = require('express');

const db = require('./data/db.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  db.getRecipes()
    .then(data => {
      res.json(data);
    }).catch(err => {
      res.status(500).json({ error: err })
    })
})

const port = 4040;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
})