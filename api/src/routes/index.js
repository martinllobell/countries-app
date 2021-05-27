const { Router } = require('express');
const {countries} = require('./countries')
const {countriesbyid}= require('./byID')
const {countriesbyname} = require('./byName')
const {tourinf} = require('./postTour')
const {next10} = require('./nextTenCountries')
const {countriesbyalphabetic} = require('./byAlphabetical')
const {countriesbypoblation}= require('./byPoblation')
const {countriesbyregion}= require('./byContinente')
const {activities} = require('./getTour')
const {getcountries}= require('./getCountries')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', next10);
router.use('/', countries);
router.use('/', getcountries);
router.use('/', countriesbyname);
router.use('/', countriesbyid);
router.use('/', tourinf);
router.use('/', countriesbyalphabetic);
router.use('/', countriesbypoblation);
router.use('/', countriesbyregion);
router.use('/', activities);








module.exports = router;
