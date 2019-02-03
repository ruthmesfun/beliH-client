import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { selectCourse } from '../actions/courseActions'
// import { fetchCourses } from '../actions/courseActions'

//Actions
import { setCourses, selectCourse } from '../actions'


//Containers
import NavBar from '../containers/NavBar';

const URL = 'http://localhost:3000/api/v1/courses'

class CourseList extends Component {
    componentDidMount(){
        fetch(URL)
        .then(r => r.json())
        .then( courses => {
          this.props.setCourses(courses)
        })
      }
    
    
    render(){
        return (
            <div>
                <NavBar />
                <h1>Course List Page</h1>
                {this.props.courses.map(course => <button key={course.id} onClick= {() => this.props.selectCourse(course) }> <Link to='/dashboard'> {course.title} </Link></button>)}

            </div>

        )
    }
}

const mapStateToProps = state => {return { courses: state.course.courses}}

const mapDispatchToProps = dispatch => {
    return {
      setCourses: (courses) => dispatch(setCourses(courses)),
      selectCourse: (course) => dispatch(selectCourse(course))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);