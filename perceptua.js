const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Perceptua')
});

app.listen(port, () => {
  console.log(`Perceptua listening at http://localhost:${port}`)
});
