import React from 'react';
import {Link} from 'react-router-dom';
import '../countries/Countries-styles.css'



//Renderizado de componentes filtrados
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