
import {
    SELECT_UNIT
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
        default: 
            return state 
    }
}
