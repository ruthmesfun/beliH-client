import {
    SELECT_STUDENT
} from '../constants/ActionTypes'


const initialState = {
    student: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case SELECT_STUDENT:
            return {
                ...state,
                student: action.payload
            }
        default: 
            return state
    }
}