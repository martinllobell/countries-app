const { URL_SET_COUNTRIES_TO_DATA_BASE, GET_ALPHABETIC_ASC, GET_ALPHABETIC_DES, GET_POBLATION_ASC, GET_POBLATION_DES, GET_ACTIVIDAD_TYPE, URL_ALP_ASC, URL_ALP_DES, URL_POB_ASC, URL_POB_DES,GET_10_COUNTRIES, URL_TOUR, URL_ALL, GET_10_NEXT, URL_NEXT, URL_PREVIOUS, GET_10_PREVIOUS, GET_ONE, SEARCH_COUNTRY, SET_VERIFY, SET_ACTIVITY, GET_ACTIVITY, URL_BY_CONTINENT, GET_BY_CONTINENT, URL_GET_ACTIVITY} = require('../../../constants')
const axios = require('axios') ;
const qs = require('qs')
const FormData = require('form-data');


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
export function searchCountries(countryname){

    return function(dispatch){
        return fetch(URL_ALL+`?name=${countryname}`).then((d)=> d.json())
        .then((country)=>{
            dispatch({
                type: SEARCH_COUNTRY,
                payload: country
            })
        })
    }
}
export function setVerify(seteo){
    return function (dispatch){
        dispatch({
            type: SET_VERIFY,
            payload: seteo
        })
    }
}

export function setActivity(activity){
    
    return function(dispatch){
        
         axios({
            method:'POST',
            url: URL_TOUR,
            data: qs.stringify({
                name: activity.name + '',
                duracion: activity.duracion +'',
                temporada: activity.temporada+'',
                dificultad: activity.dificultad+'',
                pais: activity.pais
            })
        }).then((s)=>{
            return dispatch({
                type: SET_ACTIVITY,
                payload: s
            })
        })
    }
}

export function getActivity(){
    return function(dispatch){
        return fetch(URL_GET_ACTIVITY).then((s)=> s.json())
        .then((d)=>{
            dispatch({
                type: GET_ACTIVITY,
                payload: d 
            })
        })
    }
}
export function getAlpAsc(){
    return function(dispatch){
        return fetch(URL_ALP_ASC).then((d)=> d.json())
        .then((country)=>{
            dispatch({
                type: GET_ALPHABETIC_ASC,
                payload: country
            })
        })
    }
}
export function getAlpDes(){
    return function(dispatch){
        return fetch(URL_ALP_DES).then((d)=> d.json())
        .then((country)=>{
            dispatch({
                type: GET_ALPHABETIC_DES,
                payload: country
            })
        })
    }
}
export function getPobAsc(){
    return function(dispatch){
        return fetch(URL_POB_ASC).then((d)=> d.json())
        .then((country)=>{
            dispatch({
                type: GET_POBLATION_ASC,
                payload: country
            })
        })
    }
}
export function getPobDes(){
    return function(dispatch){
        return fetch(URL_POB_DES).then((d)=> d.json())
        .then((country)=>{
            dispatch({
                type: GET_POBLATION_DES,
                payload: country
            })
        })
    }
}
export function getByContinent(continent){
       return function(dispatch){
        return fetch(URL_BY_CONTINENT + continent).then((d)=> d.json())
        .then((country)=>{
            dispatch({
                type: GET_BY_CONTINENT,
                payload: country[0]
            })
        })
    }
}
//Setear la DataBase
export function setCountriesToDatabase(){
     return fetch(URL_SET_COUNTRIES_TO_DATA_BASE)
}
