import { GET_10_COUNTRIES, GET_10_NEXT, GET_10_PREVIOUS, GET_ONE} from "../../../constants";


const initialData = {
    countriesprevious: [],
    countriesnext: [],
    countries: [],
    country: []
};

export default function (state = initialData, action){
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

        default: 
        return {
            ...state
        }       
    }
}