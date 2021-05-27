import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { AllCountriesMap, NextCountriesMap, PreviousCountriesMap } from './Countries-Controller';
import { fetchCountries, getCountriesNext, getCountriesPrevious, setVerify } from '../../store/redux/actions/actions';
import CountriesFounded from '../founded/CountriesFounded';
import './Countries-styles.css';

export default function Countries(){
    
    //Acceso a estados globales...
    const verify = useSelector(state=> state.verify)
    const countriesfounded = useSelector(state => state.countriesfounded)
    const countries = useSelector(state=> state.countries)
    const countriesnext = useSelector(state=> state.countriesnext)
    const countriesprevious = useSelector(state=> state.countriesprevious)
    const dispatch = useDispatch()

    //Me traigo los países a penas se monte el componente
    useEffect(async ()=>{        
        await dispatch(fetchCountries());
    }, []);    

    //Funciones Next Y Previous
    async function getnext() {
       await dispatch(getCountriesNext())
        await dispatch(setVerify('getnext'))
    }
    async function getprevious() {
        await dispatch(getCountriesPrevious())
        await dispatch(setVerify('getprevious'))
    }
    
    function caseSwicth(verify){
        switch(verify){
            case 'getnext':{
                return NextCountriesMap(countriesnext)
            }
            case 'getprevious':{
                return PreviousCountriesMap(countriesprevious)
            }
            case 'searchcountry':{
                return <CountriesFounded nameC={countriesfounded}/>
            }
            default:
                return AllCountriesMap(countries)
        }
    }
    return (
        <>
        <div className='buttonsNP'>
            <button onClick={getprevious} className='back'>Anterior</button>
            <button onClick={getnext} className='next'>Siguiente</button>
        </div>
        <div className='cont'>
                {
                caseSwicth(verify)            
                }
        </div>
        </>
    )
}