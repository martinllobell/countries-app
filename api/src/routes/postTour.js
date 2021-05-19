const { Router } = require('express');
const {crearActividad} = require('./controllers/postTour')

const tourinf = Router();

tourinf.post('/activity', crearActividad );

module.exports = {
    tourinf
}
