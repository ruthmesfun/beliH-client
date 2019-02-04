import React, { Component } from 'react';
import NavBar from '../containers/NavBar';
import { connect } from 'react-redux';

// actions
import { selectStudent } from '../actions'


const STUDENT_URL = 'http://localhost:3000/api/v1/students/1'

class Profile extends Component {

    componentDidMount(){
        fetch(STUDENT_URL)
        .then(r => r.json())
        .then(student => this.props.selectStudent(student))
    }



    render(){
        console.log(this.props.student)
        return (
            <div>
                <NavBar />
                <div>
                    <ul>
                        {this.props.student !== null ? this.props.student.courses.map(course =>   <li> {course.title}</li>) : null}
                    </ul>
                </div>
                
                <div>
                    <h1>Welcome {this.props.student !== null ? this.props.student.name : 'Student'}!</h1>
                    <div>
                        chart
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return { 
        student: state.student.student
    }
}
const mapDispatchToProps = dispatch => {
    return {
      selectStudent: (student) => dispatch(selectStudent(student))
    }
  }



  export default connect(mapStateToProps, mapDispatchToProps)(Profile)