const express = require('express');
const path = require('path');
const axios = require('axios');

const PORT = 3000;
const app = express();
const PUBLIC_DIR = path.resolve(__dirname, '../..', 'public');
app.use(express.static(PUBLIC_DIR));
app.use(express.json());

app.get('/api/items/:itemID', (req, res) => {
  axios.get(`http://3.140.248.238:3004/api/items/${0}`)
    .then((result) => res.send(result.data));
});
app.patch('/api/items/:itemID', (req, res) => {
  axios.patch(`http://3.140.248.238:3004/api/items/${0}`, { favorite: req.body.favorite })
    .then(() => res.sendStatus(204));
});
app.get('/api/item/:itemID', (req, res) => {
  axios.get(`http://3.140.252.86:3003/api/item/${5}`)
    .then((result) => res.send(result.data));
});
app.get('/api/reviews/:id', (req, res) => {
  axios.get(`http://18.221.226.62:3002/api/reviews/${5}`)
    .then((result) => res.send(result.data));
});
app.get('/api/relatedItems/:id', (req, res) => {
  axios.get(`http://3.23.86.72:3001/api/relatedItems/${5}`)
    .then((result) => res.send(result.data));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
