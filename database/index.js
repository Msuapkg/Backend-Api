const mongoose = require('mongoose');

const {MONGO_URL} = require('../config');

mongoose.connect(
    MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology : true}
)

    .then(() =>console.log('database connected')) 
    .catch((err) => console.log('Error conecting to database',err));   