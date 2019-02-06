
import {
    SELECT_UNIT,
    SELECT_UNITS,
    RESET_UNIT
} from '../constants/ActionTypes'


const initialState = {
    units: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case SELECT_UNIT:
            return {
                ...state,
                unit: action.payload
            }
        case SELECT_UNITS:
            return {
                ...state,
                units: action.payload
            }
        case RESET_UNIT:
        return{
            ...state,
            unit: action.payload
        }
        default: 
            return state 
    }
}
