const { Country } = require('../../db')
const { Op } = require("sequelize");

function porOrdenAlfabetico(req, res){
    Country.findAll().then((s)=>res.json(s.reverse()))
}
module.exports = {
    porOrdenAlfabetico
}