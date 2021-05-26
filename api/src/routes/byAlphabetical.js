const { Router } = require('express');
const {porOrdenAlfabetico} = require('./controllers/byAlphabetical')

const countriesbyalphabetic = Router();

countriesbyalphabetic.get('/alphabetic', porOrdenAlfabetico);

module.exports = {
    countriesbyalphabetic
}