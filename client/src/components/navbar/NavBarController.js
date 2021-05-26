import React from 'react';
import { Link } from 'react-router-dom';


export function onSearch(country) {
    if(country.length === 1){
        const {name, flag, poblation, id, continente, capital, area, subregion} = country[0];
        return (
            <div className="country"> 
            <img src={flag} alt={name} className='img'/>                   
            <article key={id}>
                <div className='contenedor'>
                    <div className="text">
                        <h1 className='fa'>{name}</h1>
                        <h4 className='fo'>Capital:<span>{capital}</span></h4>
                        <h4 className='fo'>Población:<span>{poblation}</span></h4>
                        <h4 className='fo'>Continente:<span>{continente}</span></h4>
                        <h4 className='fo'>Área:<span>{area}</span></h4>
                        <h4 className='fo'>Subregión:<span>{subregion}</span></h4>
                    </div>
                </div>
            </article> 
            <Link path to='/countries' ><button className='volver'>Atrás</button></Link>           
        </div>
        )
    }else if(country.length > 1){
        return (
            country.map((country)=>{
                const {name, flag, poblation, id, continente, capital} = country;
                console.log(name);
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

    }else {
        return (
            <div>
                <h2>No se encontraron coincidencias</h2>
            </div>
        )
    }
}
