import React from 'react';
import { Link } from 'react-router-dom';


export function onSearch(country) {
    if(country.length === 1){
        const {name, flag, poblation, id, continente, capital, area, subregion} = country[0];
        return (
            <div className="contdetail">
                <div className="country">
                    <div className="contimg">
                        <h1 className='fa'>{name}</h1>
                        <img src={flag} alt={name} className='img'/>                   
                    </div>
                    <article key={id} className='contenedor'>
                        <div className="texxt">
                            <h4 className='fo'>Capital:<span className='fi'>{capital}</span></h4>
                            <h4 className='fo'>Población:<span className='fi'>{poblation}</span></h4>
                            <h4 className='fo'>Continente:<span className='fi'>{continente}</span></h4>
                            <h4 className='fo'>Área:<span className='fi'>{area}</span></h4>
                            <h4 className='fo'>Subregión:<span className='fi'>{subregion}</span></h4>
                            <Link path to='/activity/all' className='linkAct'><h4 className='link'>Actividades...</h4></Link>
                        </div>
                    </article> 
                </div>   
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
