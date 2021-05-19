const { Router } = require('express');
const {setCountriesToDB} = require('./controllers/countries')

const countries = Router();

countries.get('/countries', setCountriesToDB);

module.exports = {
    countries
}

