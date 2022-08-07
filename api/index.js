const express = require('express');
const morgan  = require('morgan');
const cors = require('cors');
const { errors } = require('celebrate');

const api = express();

const bcrypt = require('bcrypt');
const { append } = require('express/lib/response');   

const PORT = process.env.PORT || 3000;

api.use(cors());
api.use(morgan('dev'));
api.use(express.urlencoded({extended:true }));
api.use(express.json({extended:true}));

api.get('/', (req, res) => res.send('Hola mundo'));

api.use('/api/v1', require('../routes'));

api.use(errors());

module.exports = { api, PORT};
