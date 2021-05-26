import { GET_ALPHABETIC_ASC, GET_ALPHABETIC_DES, GET_POBLATION_ASC, GET_POBLATION_DES, GET_ACTIVIDAD_TYPE, SET_ACTIVITY, GET_ACTIVITY, GET_10_COUNTRIES, GET_10_NEXT, GET_10_PREVIOUS, GET_ONE, SEARCH_COUNTRY, SET_VERIFY, GET_BY_CONTINENT} from "../../../constants";


const initialData = {
    setactivities: [],
    activities: [],
    verify: '',
    countriesfounded: [],
    countriesprevious: [],
    countriesnext: [],
    countries: [],
    country: [],
    alphabeticas: [],
    alphabeticdes: [],
    poblationasc: [],
    poblationdes: [],
    countriesbycontinent: []
};

export default function countriesReducer(state = initialData, action){
    switch(action.type){
        case GET_10_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        case GET_10_NEXT: 
            return {
                ...state,
                countriesnext: action.payload
            }
        case GET_10_PREVIOUS: 
            return {
                ...state,
                countriesprevious: action.payload
            }
        case GET_ONE:
            return {
                ...state,
                country: action.payload
            }
        case SEARCH_COUNTRY:
            return {
                ...state,
                countriesfounded: action.payload                
            }
        case SET_VERIFY:
            return {
                ...state,
                verify: action.payload
            }
        case GET_ACTIVITY:
            return {
                ...state,
                activities: action.payload
            }
        case SET_ACTIVITY:
            return {
                ...state,
                setactivities: action.payload
            }
        case GET_ALPHABETIC_ASC:
            return{
                ...state,
                alphabeticas: action.payload
            }
        case GET_ALPHABETIC_DES:
            return{
                    ...state,
                    alphabeticdes: action.payload
            }
        case GET_POBLATION_ASC:
            return{
                ...state,
                poblationasc: action.payload
            }
        case GET_POBLATION_DES:
            return{
                ...state,
                poblationdes: action.payload
            }
        case GET_BY_CONTINENT:
            return{
                ...state,
                countriesbycontinent: action.payload
            }      

        default: 
        return {
            ...state
        }       
    }
}