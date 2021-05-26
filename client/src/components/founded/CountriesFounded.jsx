import React from 'react'
import { onSearch } from '../navbar/NavBarController'
import '../countries/Countries-styles.css'

export default function CountriesFounded({nameC}) {
    return (
         onSearch(nameC)   
    )
}