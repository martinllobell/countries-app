const { Country } = require('../../db');

// var initialValue = 0 // 0/10 paises
// var nextValue = 10 // suma 10 posiciones al valor incial


function traerLosSiguientes(req, res, next){
    console.log('AAAAAAAAAAAAAAAAAA', typeof(req.params.initialValue));

    var initialValue = req.params.initialValue
    // console.log('AAAAAAAAAAAAAAAAAA',typeof(initialValue));
    // initialValue = initialValue + 10;
    // nextValue = nextValue + 10
        Country.findAll().then((s)=>{
            var arr = []
            for(i=initialValue; i<initialValue+10 ;i++){
                arr.push(s[i]) // primer next muetra de posicion 10 a la 20
            if(arr.length==10){res.send(arr)}          

            }

        })
}

function traerLosAnteriores(req, res, next){
    var initialValue = req.params.initialValue
    // initialValue = initialValue - 10;
    // nextValue = nextValue - 10;
        Country.findAll().then((s)=>{
            var arr = []
            for(i=initialValue; i<initialValue-10 ;i++){
                arr.push(s[i])
            }
            res.send(arr)
        })
    }           

module.exports = {
    traerLosSiguientes,
    traerLosAnteriores
}