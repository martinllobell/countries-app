const { GET_10_COUNTRIES, URL_ALL, GET_10_NEXT, URL_NEXT, URL_PREVIOUS, GET_10_PREVIOUS, GET_ONE} = require('../../../constants')



export function fetchCountries(){
    return function(dispatch){
        return fetch(URL_ALL).then((d)=> d.json())
        .then((country)=>{
            dispatch({
                type: GET_10_COUNTRIES,
                payload: country
            })
        })
    }
}
export function getCountriesNext(){
    return function(dispatch){
        return fetch(URL_NEXT).then((d)=> d.json())
        .then((country)=>{
            dispatch({
                type: GET_10_NEXT,
                payload: country
            })
        })
    }
}
export function getCountriesPrevious(){
    return function(dispatch){
        return fetch(URL_PREVIOUS).then((d)=> d.json())
        .then((country)=>{
            dispatch({
                type: GET_10_PREVIOUS,
                payload: country
            })
        })
    }
}

export function getOneCountry(idPais){
   
    return function(dispatch){
        return fetch(URL_ALL+`/${idPais}`).then((d)=> d.json())
        .then((country)=>{
            dispatch({
                type: GET_ONE,
                payload: country
            })
        })
    }
}