import React, { useRef } from "react";
import {Link} from 'react-router-dom'

export function getActividad(activities){
    console.log(activities);
    if(activities.length !== 0){
        return (
            activities.map((actividad)=>{
                const {name, dificultad, duracion, temporada, countries} = actividad;
                if(countries.length === 1){
                    return(
                        <div className='cardActividad'>
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
                                        <img src={c.flag} className='img'/>
                                    </div>
                                </Link>    
                                )}
                            </div>
                        </div>
                    )
                }else{
                    return(
                        <div className='cardActividadVarios'>
                            <section className='dataAct'>
                                <h2>{name}</h2>
                                <div className='detailsAct'>
                                    <div className='ee'><h4>Dificultad:</h4><span>{dificultad}</span></div>
                                    <div className='ee'><h4>Duracíon:</h4><span>{duracion}</span></div>
                                    <div className='ee'><h4>Temporada:</h4><span>{temporada}</span></div>
                                </div>                  
                            </section>
                            <div className='dataCountryVarios'>
                                {countries.map((c)=>
                                <Link path to={`/countries/${c.id}`}>
                                    <div>
                                        <h2>{c.name}</h2>
                                        <img src={c.flag} className='iimg'/>
                                    </div>
                                </Link>    
                                )}
                            </div>
                        </div>
                    )
                }
            })
        )
    }else {
        return (
            <div>
                <h1>No hay nada por aquí...</h1>
                <h3>
                    Creá una actividad acá!
                    <Link path to='http://localhost:3000/activity'>Click</Link>
                </h3>
            </div>
        )
    }
}

// export function RecopilarDatos (dataName, dataDuracion, dataPais, dataTemporada, dataDificultad){
//     const dataName = useRef(null)
//     const dataDificultad = useRef(null)
//     const dataTemporada = useRef(null)
//     const dataDuracion = useRef(null)
//     const dataPais = useRef(null)
//     console.log(dataName.current.value);
//     console.log(dataDificultad.current.value);
//     console.log(dataDuracion.current.value);
//     console.log(dataPais.current.value);
//     console.log(dataTemporada.current.value);

// }