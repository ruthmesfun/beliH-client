import { combineReducers } from 'redux'
import course from './course'
import unit from './unit'
import lesson from './lesson'

const rootReducer = combineReducers ({
    course,
    unit,
    lesson
})

export default rootReducer