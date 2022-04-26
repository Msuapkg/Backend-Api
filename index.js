const express = require('express');
const app = express();
const axios = require ('axios');

app.get('/', function (req, res) {
  res.send('Hola Mundo!')
});

app.listen(3000, () => {
    console.log(`Hola desde el puerto: ${3000}`);
});

 