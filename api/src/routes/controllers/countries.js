const { Country } = require('../../db');
const fetch = require('node-fetch');
const {llamarPorNombre} = require('../controllers/byName')



function setCountriesToDB(req, res, next){
    if(req.query.name){return llamarPorNombre(req, res)}
    fetch('https://restcountries.eu/rest/v2/all')
    .then((d)=> d.json())
    .then((data)=>{
        if(Country.length < 2){
            data.map(p=>{
                Country.create({
                    name: p.name,
                    id: p.alpha3Code,
                    poblation: p.population,
                    flag: p.flag,
                    area: p.area,
                    continente: p.region,
                    subregion: p.subregion,
                    capital: p.capital
                })
            })
        }
    }).then(()=>{
        Country.findAll().then((s)=>{
            var arr = []
            for(i=0; i< 10 ;i++){
                arr.push(s[i])
            }
            res.send(arr)
        })
    }) 
    
}


module.exports = {
    setCountriesToDB
};