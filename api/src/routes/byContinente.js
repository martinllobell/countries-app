const { Router } = require('express');
const { porContinente } = require('./controllers/byContinente')

const countriesbyregion = Router();

countriesbyregion.get('/region/:region', porContinente);

module.exports = {
    countriesbyregion
}