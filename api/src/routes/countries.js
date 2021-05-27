const { Router } = require('express');
const {setCountriesToDB} = require('./controllers/countries')

const countries = Router();

countries.get('/setdatabase', setCountriesToDB);

module.exports = {
    countries
}

