const express = require('express');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(expressStaticGzip(`${__dirname}/../client/dist`));

const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

app.get('/pokemon/:id', (req, res) => {
  axios.get(`${url}/${req.params.id}.png`)
    .then((data) => res.send(data.data))
    .catch((err) => res.send(err));

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