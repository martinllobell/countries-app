const {Country, Tourinf} = require('../../db');

function llamarPorId(req, res){
    const idPais = req.params.idPais
    Country.findOne({
        where: {
            id: idPais
        },
        include: Tourinf 
    })
    .then(c=>{res.send(c)})
}
module.exports = {
    llamarPorId
}
