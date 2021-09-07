const { Router } = require('express');
const {traerLosSiguientes, traerLosAnteriores} = require('./controllers/controllersNyP')

const next10 = Router();

next10.get('/countries/next/:initialValue', traerLosSiguientes );
next10.get('/countries/previous/:initialValue', traerLosSiguientes );

module.exports = {
    next10
}
