const {Tourinf, Country} = require('../../db');

async function crearActividad(req, res){

    const {name, dificultad, duracion, temporada, pais} = req.body

    const actividadCreada = await Tourinf.create({        
            name: name,
            dificultad: dificultad,
            duracion: duracion,
            temporada: temporada,  
    })

    for(i=0; i < pais.length; i++){
        actividadCreada.addCountry(await Country.findOne({
            where: {
                name: pais[i]
            }
        }))
    }

    res.send('Creado!')
}


module.exports = {
    crearActividad
}