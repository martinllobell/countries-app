import React from 'react';
import { Link } from 'react-router-dom';

export function AllCountriesMap(countries){

    countries = countries.filter((e,i)=>i<10)

    return (
        countries.map((country, i)=>{
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
export function NextCountriesMap(countriesnext){
    console.log('AHDAUGDIUYAVHISVBDIBAUDSHASIU',countriesnext);
    
    return (
        countriesnext.map((country)=>{
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

export function PreviousCountriesMap(countriesprevious){

    return (
        countriesprevious.map((country)=>{
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

// export function GetOneCountry(country){
//     const {name, flag, poblation, id, continente, capital} = country;
//     return (
//         <article key={id} className='cont'>
//             <div className='card'>
//                 <img src={flag} alt={name}/>
//                 <div className="text">
//                     <h3 className='titulo'>{name}</h3>
//                     <h4 className='info'>Capital:<span className='infosecundaria'>{capital}</span></h4>
//                     <h4 className='info'>Población:<span className='infosecundaria'>{poblation}</span></h4>
//                     <h4 className='info'>Continente:<span className='infosecundaria'>{continente}</span></h4>
//                 </div>
//             </div>
//         </article>
//     )    
// }
