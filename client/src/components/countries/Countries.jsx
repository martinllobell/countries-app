import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { AllCountriesMap, NextCountriesMap, PreviousCountriesMap } from './Countries-Controller';
import { fetchCountries, getCountriesNext, getCountriesPrevious, setVerify } from '../../store/redux/actions/actions';
import CountriesFounded from '../founded/CountriesFounded';
import './Countries-styles.css';
import NavBar from '../navbar/NavBar';
import { URL_PREVIOUS } from '../../constants';

export default function Countries(){
    
    //Acceso a estados globales...
    const verify = useSelector(state=> state.verify)
    const countriesfounded = useSelector(state => state.countriesfounded)
    const countries = useSelector(state=> state.countries)
    const countriesnext = useSelector(state=> state.countriesnext)
    const countriesprevious = useSelector(state=> state.countriesprevious)
    const dispatch = useDispatch()

    const [hiddenBtn, setHiddenBtn] = useState(false)
    const [initialValue, setInitialValue] = useState(0)

    //Me traigo los países a penas se monte el componente

    useEffect(async ()=>{        
        await dispatch(fetchCountries());
    }, []); 

    
    //Funciones Next Y Previous
    function getnext() {
        dispatch(getCountriesNext(initialValue+10))
        dispatch(setVerify('getnext'))
        setInitialValue(initialValue+10)

    }
    async function getprevious() {
        await dispatch(getCountriesPrevious(initialValue-10))
        await dispatch(setVerify('getprevious'))
        setInitialValue(initialValue-10)

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
        <div className={verify=='searchcountry'?'none':'buttonsNP'}>
            <button onClick={initialValue==0?null:getprevious} className={initialValue==0?'backDesactivate':'back'}>Anterior</button>
            <button onClick={getnext} className='next'>Siguiente</button>
        </div>
        <div className={verify=='searchcountry'?'':'cont'}>
                {
                caseSwicth(verify)            
                }
        </div>
        </>
    )
}