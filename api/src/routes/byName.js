const { Router } = require('express');
const { llamarPorNombre } = require('./controllers/byName');

const countriesbyname = Router();

countriesbyname.get('/countries?name', llamarPorNombre);

module.exports = {
    countriesbyname
}