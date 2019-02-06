import React, { Component } from 'react';

import { connect } from 'react-redux';

// import { Chart } from 'chart.js';
import { Bar } from 'react-chartjs-2';

import ChartInfo from './ChartInfo'

// import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'

// import Chart from 'chart.js'

import { selectUnit } from '../actions'


const UNIT_URL = 'http://localhost:3000/api/v1/units'

class BarGraph extends Component {
  state = {
      units: {},
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      options: {
        scales: {
            xAxes: [{
                ticks: {
                    min: 0,
                    max: 10,
                    stepSize: 1
                }
            }],
            yAxes: [{
              ticks: {
                  min: 0,
                  max: 2,
                  stepSize: 1
              }
          }]

        }
    },
      datasets: [
        {
          label: 'My First dataset',
          fill: false,
          lineTension: 1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 0,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]

    };

    allCompleted = (unit) => {
      return unit.lessons.filter(lesson => lesson.completed).length === unit.lessons.length &&  unit.lessons.length > 0
    }

    completedLesson = (unit) => {
      return `${unit.lessons.filter(lesson => lesson.completed).length}/${unit.lessons.length} completed`
    }
    componentDidMount(){
      if(this.props.student){
        this.setState({
          ...this.state,
          units: this.props.units,
          labels: this.props.units.map(unit => `${unit.title} [${this.allCompleted(unit)? 'All Done!': this.completedLesson(unit)}]`),
          datasets: [
            {
              label: "lessons you've completed",
              fill: false,
              lineTension: 1,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: this.props.units.map(unit => unit.lessons.filter(lesson => lesson.completed).length)
            }
          ]
        })
      }
    }

    componentDidUpdate(nextProps, prevState){
      if(prevState.units !== nextProps.units){
        this.setState({
          ...this.state,
          units: this.props.units,
          labels:this.props.units.map(unit => `${unit.title} [${this.allCompleted(unit)? 'Completed': this.completedLesson(unit)}]`),
          datasets: [
            {
              label: "lessons you've completed",
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 0,
              pointHitRadius: 10,
              data: this.props.units.map(unit => unit.lessons.filter(lesson => lesson.completed).length)
            }
          ]
        })
      }
    }

    renderTheUnitInfo = (event) => {
      if(event[0] !== undefined){
        fetch(UNIT_URL)
        .then(r=> r.json())
        .then(units => {
          
          let unit = units.find(unit => unit.title === event[0]._model.label.split(' [')[0])

          this.props.selectUnit(unit)


        })
      }
    }
    render(){
      console.log(this.props.unit)
      return (
        <div>
          <Bar data={this.state} onElementsClick ={(event) => this.renderTheUnitInfo(event)}  
          options={this.state.options}
          />

          <div>
            {this.props.unit.title !== undefined ? <ChartInfo /> : null}
          </div>
        </div>


    )
    }

}


const mapStateToProps = state => {
  return { 
      student: state.student.student,
      unit: state.unit.unit,
      units: state.unit.units,
      course: state.course.course
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectUnit: (unit) => dispatch(selectUnit(unit))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(BarGraph)