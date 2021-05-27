const { Country } = require('../../db');
const { llamarPorNombre } = require('../controllers/byName')

function getCountriess(req, res){
    if(req.query.name){return llamarPorNombre(req, res)}
    Country.findAll().then((s)=>{
        var arr = []
        for(i=0; i< 10 ;i++){
            arr.push(s[i])
        }
        res.send(arr)
    })
}
module.exports={
    getCountriess
}