import React, { Component } from 'react';
import {connect} from 'react-redux'


//Containers
import LessonInfo from '../containers/LessonInfo'
import NavBar from '../containers/NavBar';

//Components
import Unit from '../components/Unit'

//Actions
import { selectUnit } from '../actions'

const UNIT_URL = 'http://localhost:3000/api/v1/units/'

class CourseDashboard extends Component {
    
    chooseUnit = (unit) => {
        fetch(UNIT_URL + `${unit.id}`)
        .then(r => r.json())
        .then(unit => {
            this.props.selectUnit(unit)
        })
    }


    showAllUnits = () => {
        return this.props.course.units.map(unit => {
            return <li key = {unit.id} >
                        <h4 onClick = {() => this.chooseUnit(unit)}>{unit.title}</h4> 
                        <Unit unit_id = {unit.id}/>
                    </li>
        })}
    
    render(){
        return (
            <div>
                <NavBar />
                <h1>Course DashBoard Page</h1>
                <div>
                    <h3> {this.props.course.title}</h3>
                    
                    <ul>
                        {this.showAllUnits()}
                    </ul>

                </div>
                <div>
                    <LessonInfo />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        course: state.course.course
    }
}
const mapDispatchToProps = dispatch => {
    return {
      selectUnit: (unit) => dispatch(selectUnit(unit))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CourseDashboard)
