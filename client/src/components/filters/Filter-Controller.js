import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import '../countries/Countries-styles.css'



//Renderizado de componentes filtrados...
export function FilterController(countriesFiltrados){
    return (
        countriesFiltrados.map((country)=>{
            const {name, flag, poblation, id, continente, capital} = country;
            return (
                <section  className='card'>
                    <Link path to={`/countries/${id}`}>
                        <article key={id}  className='artc'>
                            <div>
                                <img src={flag} alt={name} className='image'/>
                                <div className="text">
                                    <h3 className='titulo'>{name}</h3>
                                    <h4 className='info'>Capital:<span className='infosecundaria'>{capital}</span></h4>
                                    <h4 className='info'>Población:<span className='infosecundaria'>{poblation}</span></h4>
                                    <h4 className='info'>Continente:<span className='infosecundaria'>{continente}</span></h4>
                                </div>
                            </div>
                        </article>
                    </Link>
                </section>
            )
        })
    )
}
export function FilterControllerContinent(countriesFiltrados){
    console.log(countriesFiltrados);
    return (
        countriesFiltrados.map((country)=>{
            const {name, flag, poblation, id, continente, capital} = country;
            return (
                <section  className='card'>
                    <Link path to={`/countries/${id}`}>
                        <article key={id}  className='artc'>
                            <div>
                                <img src={flag} alt={name} className='image'/>
                                <div className="text">
                                    <h3 className='titulo'>{name}</h3>
                                    <h4 className='info'>Capital:<span className='infosecundaria'>{capital}</span></h4>
                                    <h4 className='info'>Población:<span className='infosecundaria'>{poblation}</span></h4>
                                    <h4 className='info'>Continente:<span className='infosecundaria'>{continente}</span></h4>
                                </div>
                            </div>
                        </article>
                    </Link>
                </section>
            )
        })
    )
}
//Filtrado de Actividades...
    //////////////////////////////////////////////////////////////////////////////
    ///////////////////  FUNCION PARA FILTRAR POR ACTIVIDADES... /////////////////
    //////////////////////////////////////////////////////////////////////////////
    export function getActividad(data, key){
        return (
            data.map((actividad)=>{
                const {name, dificultad, duracion, temporada, countries} = actividad;
                if(name === key){
                    return(
                        <div className='cardActividadd'>
                            <section className='dataAct'>
                                <h2>{name}</h2>
                                <div className='detailsAct'>
                                    <div className='ee'><h4>Dificultad:</h4><span>{dificultad}</span></div>
                                    <div className='ee'><h4>Duracíon:</h4><span>{duracion}</span></div>
                                    <div className='ee'><h4>Temporada:</h4><span>{temporada}</span></div>
                                </div>                  
                            </section>
                            <div className='dataCountry'>
                                {countries.map((c)=>
                                <Link path to={`/countries/${c.id}`}>
                                    <div>
                                        <h2>{c.name}</h2>
                                        <img src={c.flag} className='imgg'/>
                                    </div>
                                </Link>    
                                )}
                            </div>
                        </div>
                    )
                }
            })
        )
    }
