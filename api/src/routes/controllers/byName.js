const {Country} = require('../../db');
const { Op } = require("sequelize");

function llamarPorNombre(req, res){
    const {name} = req.query
    Country.findAll({
        where: {
            name: {
                [Op.or]:{
                    [Op.like]: name,
                    [Op.startsWith]: name
                }
            }
        }
    })
    .then(c=>{
        if(!c[0]){
            res.send(404, ('No hay coincidencias'))
        }else{
            console.log(c);
            res.send(c)
        }
    })
}
module.exports = {
    llamarPorNombre
}
