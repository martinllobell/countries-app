import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { AllCountriesMap, GetOneCountry, NextCountriesMap, PreviousCountriesMap } from './Countries-Controller';
import { fetchCountries, getCountriesNext, getCountriesPrevious, getOneCountry  } from '../../store/redux/actions/actions';
import './Countries-styles.css';






export default function Countries(){

    

    const [verify, setVerify] = useState('')

    const countries = useSelector(state=> state.countries)
    const countriesnext = useSelector(state=> state.countriesnext)
    const countriesprevious = useSelector(state=> state.countriesprevious)
    const dispatch = useDispatch()



    useEffect(async ()=>{        
        await dispatch(fetchCountries());
    }, []);

    

    async function getnext() {
       await dispatch(getCountriesNext())
        setVerify('getnext')
    }
    async function getprevious() {
        await dispatch(getCountriesPrevious())
        setVerify('getprevious')
    }

    function caseSwicth(verify){
        switch(verify){
            case 'getnext':{
                return NextCountriesMap(countriesnext)
            }
            case 'getprevious':{
                return PreviousCountriesMap(countriesprevious)
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
        <div className="cont">
                {
                caseSwicth(verify)            
                }
        </div>
        </>
    )
}
