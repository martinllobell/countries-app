import React from 'react'
import { onSearch } from '../navbar/NavBarController'
import '../countries/Countries-styles.css'
import { useDispatch } from 'react-redux'
import { setVerify } from '../../store/redux/actions/actions'

export default function CountriesFounded({nameC}) {
    const dispatch = useDispatch()
    return (
        <div className={nameC.length>1?'cont':''}>
        {onSearch(nameC)}
        <button onClick={()=>{dispatch(setVerify(''))}} className={nameC.length>1?'volverGrande':'volverSearch'}>Atrás</button>  
        </div>
          
    )
}