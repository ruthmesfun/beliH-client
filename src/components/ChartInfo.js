import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ChartInfo extends Component {
    render(){
        console.log(this.props)
        return (
                <div>
                    <p>{this.props.unit.title} </p>
                    <p>{this.props.unit.description} </p>
                    {this.props.unit.lessons.map(lesson => <p key={lesson.id}>  {lesson.title} - {lesson.completed ? 'YOU GO THIS!' : <Link to= '/dashboard'>JUST NEED A LITTLE REVIEW </Link>}</p>)}
                </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        unit: state.unit.unit,
        course: state.course.course
    }
  }
  

export default connect(mapStateToProps)(ChartInfo)