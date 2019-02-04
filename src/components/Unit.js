import React, { Component } from 'react';
import {connect} from 'react-redux'
import { selectLesson } from '../actions'


const LESSON_URL = 'http://localhost:3000/api/v1/lessons/'

class Unit extends Component {

    showLesson = (lesson) => {
        fetch(LESSON_URL + `${lesson.id}`)
        .then(r => r.json())
        .then(lesson => this.props.selectLesson(lesson))
    }

    render(){
        return (
            <ul>
            {this.props.unit !== undefined  && this.props.unit.id === this.props.unit_id ? this.props.unit.lessons.map(lesson => <li key ={lesson.id} onClick = {() => this.showLesson(lesson)}>{lesson.title} {lesson.completed ? '- X' : null}</li>) : null}
            </ul>
        )
    }
}

const mapStateToProps = state => {return { unit: state.unit.unit}}

const mapDispatchToProps = dispatch => {
    return {
      selectLesson: (lesson) => dispatch(selectLesson(lesson))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Unit)