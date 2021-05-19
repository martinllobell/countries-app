const { Router } = require('express');
const {countries} = require('./countries')
const {countriesbyid}= require('./byID')
const {countriesbyname} = require('./byName')
const {tourinf} = require('./postTour')
const {next10} = require('./nextTenCountries')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', next10);
router.use('/', countries);
router.use('/', countriesbyname);
router.use('/', countriesbyid);
router.use('/', tourinf);





module.exports = router;
