const { Tourinf, Country } = require('../../db');

async function getActivities(req, res){
    let actividad = await Tourinf.findAll({
        include: [
          { model: Country }
        ]
      });
      res.send(actividad)
}
module.exports = {
    getActivities
}
