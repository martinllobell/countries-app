const { Country } = require('../../db');

var initialValue = 0 // 0/10 paises
var nextValue = 10 // suma 10 posiciones al valor incial


function traerLosSiguientes(req, res, next){
    initialValue = initialValue + 10;
    nextValue = nextValue + 10
        Country.findAll().then((s)=>{
            var arr = []
            for(i=initialValue; i<nextValue ;i++){
                arr.push(s[i]) // primer next muetra de posicion 10 a la 20
            }
            res.send(arr)
        })
}

function traerLosAnteriores(req, res, next){
    initialValue = initialValue - 10;
    nextValue = nextValue - 10;
        Country.findAll().then((s)=>{
            var arr = []
            for(i=initialValue; i<nextValue ;i++){
                arr.push(s[i])
            }
            res.send(arr)
        })
    }           

module.exports = {
    traerLosSiguientes,
    traerLosAnteriores
}