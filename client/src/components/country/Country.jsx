import React, { useEffect } from 'react';
import {useParams, Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getOneCountry } from '../../store/redux/actions/actions';
import './Country-styles.css'


export default function Country() {

    const {idPais} = useParams()
    
    const country = useSelector(state=> state.country);
    const activities = useSelector(state=>state.activities);
    const dispatch = useDispatch()

    const {name, flag, poblation, id, continente, capital, area, subregion} = country;
    useEffect(async()=>{
        await dispatch(getOneCountry(idPais))
    }, [])
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
                <Link path to='/countries' className='volver' >Atrás</Link>           
            </div>   
        </div>
     
    )
      
}