
import {
    SELECT_UNIT,
    SELECT_UNITS
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
        default: 
            return state 
    }
}
