const { Router } = require('express');
const {porPoblacionAsc, porPoblacionDes } = require('./controllers/byPoblation')

const countriesbypoblation = Router();

countriesbypoblation.get('/poblation/ascendente', porPoblacionAsc);
countriesbypoblation.get('/poblation/descendente', porPoblacionDes);

module.exports = {
    countriesbypoblation
}