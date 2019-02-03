
import {
    SET_COURSES,
    SELECT_COURSE
} from '../constants/ActionTypes'


const initialState = {
    courses: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case SET_COURSES:
            return {
                ...state, 
                courses: action.payload
            }
        case SELECT_COURSE:
            return {
                ...state,
                course: action.payload
            }
        default: 
            return state
    
    }
}


