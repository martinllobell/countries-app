const { Router } = require('express');
const {llamarPorId} = require('./controllers/byID')

const countriesbyid = Router();

countriesbyid.get('/countries/:idPais', llamarPorId);

module.exports = {
    countriesbyid
}