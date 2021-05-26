const { Op } = require('sequelize');
const {Country}= require('../../db');

function porPoblacionAsc(req, res){
    var arrPoblacionNumeros = []
    var ordenado = []
    Country.findAll().then((d)=>{
        for(i=0;i<d.length;i++){
            arrPoblacionNumeros.push(d[i].poblation)
        }
    }).then(()=>{
        return arrPoblacionNumeros.sort((a, p)=>(a-p)*-1)
    }).then(async(c)=>{
        for(i=0;i<250;i++){
        aux = await Country.findOne({
                where:{
                    poblation:{
                        [Op.eq]: c[i]
                    }
                }
            })
            ordenado.push(aux)
        }
        console.log(ordenado);
        res.send(ordenado.reverse())
    })
}



function porPoblacionDes(req, res){
    var arrPoblacionNumeros = []
    var ordenado = []
    Country.findAll().then((d)=>{
        for(i=0;i<d.length;i++){
            arrPoblacionNumeros.push(d[i].poblation)
        }
    }).then(()=>{
        return arrPoblacionNumeros.sort((a, p)=>(a-p)*-1)
    }).then(async(c)=>{
        for(i=0;i<250;i++){
        aux = await Country.findOne({
                where:{
                    poblation:{
                        [Op.eq]: c[i]
                    }
                }
            })
            ordenado.push(aux)
        }
        console.log(ordenado);
        res.send(ordenado)
    })
    
}

module.exports = {
    porPoblacionAsc,
    porPoblacionDes
    

}