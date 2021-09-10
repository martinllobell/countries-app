

//Constantes de Actions...
const GET_10_COUNTRIES = 'GET_10_COUNTRIES';
const GET_10_NEXT = 'GET_10_NEXT';
const GET_10_PREVIOUS = 'GET_10_PREVIOUS';
const GET_ONE = 'GET_ONE';
const GET_ACTIVITY = 'GET_ACTIVITY';    
const SEARCH_COUNTRY = 'SEARCH_COUNTRY';
const SET_VERIFY = 'SET_VERIFY';
const SET_ACTIVITY = 'SET_ACTIVITY';
const GET_ALPHABETIC_ASC = 'GET_ALPHABETIC_ASC';
const GET_ALPHABETIC_DES = 'GET_ALPHABETIC_DES';
const GET_POBLATION_ASC = 'GET_POBLATION_ASC';
const GET_POBLATION_DES = 'GET_POBLATION_DES';
const GET_ACTIVIDAD_TYPE = 'GET_ACTIVIDAD_TYPE';
const GET_BY_CONTINENT = 'GET_BY_CONTINENT';


//Constantes de URL -----LOCAL------...
// const BASE_URL = process.env.REACT_APP_API || 'http://localhost:3001';
// const URL_ALL = `${BASE_URL}/countries`;
// const URL_TOUR = `${BASE_URL}/activity`;
// const URL_NEXT = URL_ALL + '/next';
// const URL_PREVIOUS = URL_ALL + '/previous';
// const URL_ALP_ASC = URL_ALL;
// const URL_ALP_DES = `${BASE_URL}`+'/alphabetic';
// const URL_POB_ASC = `${BASE_URL}`+'/poblation/ascendente';
// const URL_POB_DES = `${BASE_URL}`+'/poblation/descendente';
// const URL_BY_CONTINENT = `${BASE_URL}`+'/region/';
// const URL_GET_ACTIVITY = `${BASE_URL}`+'/activityget';
// const URL_SET_COUNTRIES_TO_DATA_BASE = `${BASE_URL}`+'/setdatabase'


//Constantes de URL ------DEPLOY------...
const BASE_URL = 'https://proyecto-countries.herokuapp.com';
const URL_ALL = `${BASE_URL}/countries`;
const URL_TOUR = `${BASE_URL}/activity`;
const URL_NEXT = URL_ALL + '/next';
const URL_PREVIOUS = URL_ALL + '/previous';
const URL_ALP_ASC = URL_ALL;
const URL_ALP_DES = `${BASE_URL}`+'/alphabetic';
const URL_POB_ASC = `${BASE_URL}`+'/poblation/ascendente';
const URL_POB_DES = `${BASE_URL}`+'/poblation/descendente';
const URL_BY_CONTINENT = `${BASE_URL}`+'/region/';
const URL_GET_ACTIVITY = `${BASE_URL}`+'/activityget';
const URL_SET_COUNTRIES_TO_DATA_BASE = `${BASE_URL}`+'/setdatabase'


module.exports = {
    URL_ALL,
    URL_TOUR,
    GET_10_COUNTRIES,
    GET_10_NEXT,
    GET_10_PREVIOUS,
    URL_NEXT,
    URL_PREVIOUS,
    GET_ONE,
    SEARCH_COUNTRY,
    SET_VERIFY,
    GET_ACTIVITY,
    SET_ACTIVITY,
    GET_ALPHABETIC_ASC,
    GET_ALPHABETIC_DES,
    GET_POBLATION_ASC,
    GET_POBLATION_DES, 
    GET_ACTIVIDAD_TYPE,
    URL_ALP_ASC,
    URL_ALP_DES,
    URL_POB_ASC,
    URL_POB_DES,
    GET_BY_CONTINENT,
    URL_BY_CONTINENT,
    URL_GET_ACTIVITY,
    URL_SET_COUNTRIES_TO_DATA_BASE

}