import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getOneCountry } from '../../store/redux/actions/actions';
import './Country-styles.css'


export default function Country() {

    const {idPais} = useParams()
    
    const country = useSelector(state=> state.country)
    const dispatch = useDispatch()

    const {name, flag, poblation, id, continente, capital, area, subregion} = country;

    useEffect(async()=>{
        await dispatch(getOneCountry(idPais))
    }, [])

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
        </div>
        
    )
}