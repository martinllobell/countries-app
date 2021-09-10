const {Tourinf, Country} = require('../../db');

var id = 1
async function crearActividad(req, res, next){
    id = id * 2
    const {name, dificultad, duracion, temporada, pais} = req.body
    if(name.length !== 0){
        var aux = pais.split(',')
        var paiss = []
        for(i=0;i<aux.length;i++){
            const countryy = await Country.findOne({
                where:{
                    name: aux[i]
                }
            })
            paiss.push(countryy)
        }
        
        const actividad = await Tourinf.create({
                id: id,        
                name: name,
                dificultad: dificultad,
                duracion: duracion,
                temporada: temporada,  
        })
        actividad.addCountry(paiss);
        res.send('Creado!')
    }else{
        res.send('error')
    }
}

module.exports = {
    crearActividad
}