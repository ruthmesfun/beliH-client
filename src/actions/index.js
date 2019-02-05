import * as types from '../constants/ActionTypes'

//COURESES
export const setCourses = (courses) => {
    return {
        type: types.SET_COURSES,
        payload: courses
    }
}

export const selectCourse = (course) => {
    return {
        type: types.SELECT_COURSE,
        payload: course
    };
};

// UNITS
export const selectUnit = (unit) => {
    return {
        type: types.SELECT_UNIT,
        payload: unit
    }
}

export const selectUnits = (units) => {
    return {
        type: 'SELECT_UNITS',
        payload: units
    }
}

// LESSONS
export const selectLesson = (lesson) => {
    return {
        type: types.SELECT_LESSON, 
        payload: lesson
    }
}

//STUDENTS

export const selectStudent = (student) => {
    return {
        type: types.SELECT_STUDENT,
        payload: student
    }
}