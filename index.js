const express = require('express');
const axios = require('axios');

const app = express();

app.get('/api/v1', function (req, res) {
  res.send('Hola Mundo!')
});

app.listen(3000, () => {
  console.log(`Hola desde el puerto: ${3000}`);
});

let pokeApi = 'https://pokeapi.co/api/v2/pokemon/dragonite';

async function user() {
  const response = await axios.get(pokeApi);
  try {
    let data = response.data;
    let moves = data.moves.map(item => item.move.name);
    console.log(moves);
  } catch (error) {
    console.log(error);
  }
};

user();