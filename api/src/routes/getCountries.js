const { Router } = require('express');
const {getCountriess} = require('./controllers/getCountries')

const getcountries = Router();

getcountries.get('/countries', getCountriess);

module.exports = {
    getcountries
}

