const { Country } = require('../../db');
const fetch = require('node-fetch');


function setCountriesToDB(req, res, next){
    Country.findAll().then((s)=>{
        if(s.length==0 || s[0] == null){
            fetch('https://restcountries.eu/rest/v2/all')
            .then((d)=> d.json())
            .then((data)=>{
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
            })
            res.send('Base de datos Actualizada')
        }else{
            console.log('Ya hay países en la Base de datos!');
        }
    })
}


module.exports = {
    setCountriesToDB
};
