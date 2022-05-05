const express = require('express');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');
const axios = require('axios');
const app = express();
const { Pool } = require('pg');
const db = require('../db/models');
const PORT = process.env.PORT || 3000;
require('dotenv').config();

const pool = new Pool({
  user: process.env.dbUser,
  host: process.env.dbHost,
  database: process.env.db,
  port: '5432'
});

app.use(express.json());
app.use(expressStaticGzip(`${__dirname}/../client/dist`));

const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

app.get('/score', (req, res) => {
  db.getScore()
      .then((data) => {
        res.send(data.rows);
      })
      .catch((error) => console.log(error));
});
app.post('/score', (req, res) => {
  let username = req.query.username;
  let round = req.query.round;
  db.postScore(username, round)
      .then((data) => {
        res.send(data.status);
      })
      .catch((error) => console.log(error));

});


app.get('*.js', (req, res, next) => {
  if (req.header('Accept-Encoding').includes('br')) {
    req.url += '.br';
    res.set('Content-Encoding', 'br');
    res.set('Content-Type', 'application/javascript; charset=UTF-8');
  }
  next();
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});