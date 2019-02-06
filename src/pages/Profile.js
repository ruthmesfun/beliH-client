import React, { Component } from 'react';
import NavBar from '../containers/NavBar';
import { connect } from 'react-redux';



//components
import BarGraph from '../components/BarGraph'

// actions
import { selectStudent, selectCourse, selectUnits, resetUnit} from '../actions'


const STUDENT_URL = 'http://localhost:3000/api/v1/students/1'



class Profile extends Component {

    componentDidMount(){
        fetch(STUDENT_URL)
        .then(r => r.json())
        .then(student => this.props.selectStudent(student))
    }


    renderBarGraph = (course) => {
        const units = this.props.student.units.filter(unit => course.id === unit.course_id)
        this.props.selectCourse(course)
        this.props.selectUnits(units)
        this.props.resetUnit()

    }

    render(){
        return (
            <div>
                <NavBar />
                <div>
                    <ul>
                        {this.props.student !== null ? this.props.student.courses.map(course =>   <li key = {course.id}  onClick={() => {this.renderBarGraph(course)}}> {course.title}</li>) : null}
                    </ul>
                </div>
                
                <div>
                    <h1>Welcome {this.props.student !== null ? this.props.student.name : 'Student'}!</h1>
                    <div>
                        { this.props.units.length > 0 ? <BarGraph min={0} max={10} stacked={true}/> : <h3>click on your courses to see the graph</h3>}
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return { 
        student: state.student.student,
        units: state.unit.units,
        course: state.course.course
    }
}
const mapDispatchToProps = dispatch => {
    return {
      selectStudent: (student) => dispatch(selectStudent(student)),
      selectCourse: (course) => dispatch(selectCourse(course)),
      selectUnits: (units) => dispatch(selectUnits(units)), 
      resetUnit: () => dispatch(resetUnit())
    }
  }



  export default connect(mapStateToProps, mapDispatchToProps)(Profile)