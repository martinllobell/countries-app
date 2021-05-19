import React from 'react';
import { Link } from 'react-router-dom';

export function AllCountriesMap(countries){

    return (
        countries.map((country)=>{
            const {name, flag, poblation, id, continente, capital} = country;
            return (
                <Link path to={`/countries/${id}`}>
                    <article key={id}>
                        <div className='card'>
                            <img src={flag} alt={name}/>
                            <div className="text">
                                <h3>{name}</h3>
                                <h4>Capital:<span>{capital}</span></h4>
                                <h4>Población:<span>{poblation}</span></h4>
                                <h4>Continente:<span>{continente}</span></h4>
                            </div>
                        </div>
                    </article>
                </Link>
            )
        })
    )
}
export function NextCountriesMap(countriesnext){
    
    return (
        countriesnext.map((country)=>{
            const {name, flag, poblation, id, continente, capital} = country;
            return (
                <Link path to={`/countries/${id}`}>
                    <article key={id}>
                        <div className='card'>
                            <img src={flag} alt={name}/>
                            <div className="text">
                                <h3>{name}</h3>
                                <h4>Capital:<span>{capital}</span></h4>
                                <h4>Población:<span>{poblation}</span></h4>
                                <h4>Continente:<span>{continente}</span></h4>
                            </div>
                        </div>
                    </article>
                </Link>
            )
        })
    )

}

export function PreviousCountriesMap(countriesprevious){

    return (
        countriesprevious.map((country)=>{
            const {name, flag, poblation, id, continente, capital} = country;
            return (
                <Link path to={`/countries/${id}`}>
                    <article key={id}>
                        <div className='card'>
                            <img src={flag} alt={name}/>
                            <div className="text">
                                <h3>{name}</h3>
                                <h4>Capital:<span>{capital}</span></h4>
                                <h4>Población:<span>{poblation}</span></h4>
                                <h4>Continente:<span>{continente}</span></h4>
                            </div>
                        </div>
                    </article>
                </Link>
            )
        })
    )
}

export function GetOneCountry(country){
    const {name, flag, poblation, id, continente, capital} = country;
    return (
        <article key={id}>
            <div className='card'>
                <img src={flag} alt={name}/>
                <div className="text">
                    <h3>{name}</h3>
                    <h4>Capital:<span>{capital}</span></h4>
                    <h4>Población:<span>{poblation}</span></h4>
                    <h4>Continente:<span>{continente}</span></h4>
                </div>
            </div>
        </article>
    )    
}
