
import {
    SELECT_LESSON
} from '../constants/ActionTypes'


const initialState = {
    lesson: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case SELECT_LESSON:
            return {
                ...state,
                lesson: action.payload
            }
        default: 
            return state
    
    }
}
