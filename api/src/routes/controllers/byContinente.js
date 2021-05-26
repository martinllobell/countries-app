const {Country} = require('../../db');

function porContinente(req, res){
    const {region} = req.params
    const arreglo = []
    Country.findAll({
        where:{
            continente: region
        }
    }).then((c)=>{arreglo.push(c)}).then(()=>{res.send(200, arreglo)})
}

module.exports = {
    porContinente
}
