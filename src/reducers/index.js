import { combineReducers } from 'redux'
import course from './course'
import unit from './unit'
import lesson from './lesson'
import student from './student'

const rootReducer = combineReducers ({
    course,
    unit,
    lesson,
    student
})

export default rootReducer