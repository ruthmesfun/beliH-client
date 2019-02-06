import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Player } from 'video-react';


import { selectLesson } from '../actions'


const LESSON_URL = 'http://localhost:3000/api/v1/lessons/'

class Lesson extends Component {

    handleChange = (event) => {
        const checked= event.target.checked

        fetch(LESSON_URL + `${this.props.lesson.id}`, {
            method: 'PUT',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({completed: checked})
        })
        .then(r => r.json())
        .then(lesson => this.props.selectLesson(lesson))
    }

    nextLesson = () => {
        fetch(LESSON_URL + `${this.props.lesson.id + 1}`)
        .then(r => r.json())
        .then(lesson => {
            if (lesson.status !== 404){
                this.props.selectLesson(lesson)
            }
        })
    }
    
    renderForm = () => {
        if (this.props.lesson!== null){
            return <form>
                    <label>
                        I completed this:
                        <input 
                            name='completed'
                            type='checkbox'
                            checked={this.props.lesson.completed} 
                            onChange = {(event) => this.handleChange(event) }
                            />
                    </label>
                </form>
        }
    }

    render(){
        console.log(this.props.lesson)
        return (
            <div>
            <h1>{this.props.lesson !== null ?this.props.lesson.title : null}</h1>
            <h4>{this.props.lesson !== null ?this.props.lesson.description : null}</h4>
            <p>{this.props.lesson !== null ?this.props.lesson.objective : null}</p>
            <p>{this.props.lesson !== null ?this.props.lesson.description: null}</p>

            { this.props.lesson !== null && this.props.lesson.video !== null ? <iframe
            src= {this.props.lesson.video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/> : ''}

            {this.renderForm()}

           {this.props.lesson !== null ? <button onClick={() => this.nextLesson()}> Next </button> : ''}
            </div>
            
        )
    }
}

const mapStateToProps = state => {return { 
    lessons: state.lesson.lessons,
    lesson: state.lesson.lesson}}

const mapDispatchToProps = dispatch => {
    return {
      selectLesson: (lesson) => dispatch(selectLesson(lesson))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Lesson);