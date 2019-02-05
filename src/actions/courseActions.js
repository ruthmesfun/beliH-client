
// actions for courses

export const fetchCourses = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/api/v1/courses')
        .then(r => r.json())
        .then(courses => dispatch(dispatch({type: 'FETCH_COURSES', courses})))
    }
}

export const selectCourse = (course) => {
    return {
        type: 'SELECT_COURSE',
        payload: course
    };
};

export const selectUnit = (unit) => {
    return {
        type: 'SELECT_UNIT',
        payload: unit
    }
}



export const selectLesson = (lesson) => {
    return {
        type: 'SELECT_LESSON',
        payload: lesson
    }
}


