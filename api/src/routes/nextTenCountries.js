const { Router } = require('express');
const {traerLosSiguientes, traerLosAnteriores} = require('./controllers/controllersNyP')

const next10 = Router();

next10.get('/countries/next', traerLosSiguientes );
next10.get('/countries/previous', traerLosAnteriores );

module.exports = {
    next10
}
