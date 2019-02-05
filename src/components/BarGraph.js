import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Chart } from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { selectUnit} from '../actions'


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
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };

    componentDidMount(){
      if(this.props.student){
        this.setState({
          ...this.state,
          units: this.props.units,
          labels: this.props.units.map(unit => unit.title),
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
          labels: this.props.units.map(unit => unit.title),
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
              pointRadius: 1,
              pointHitRadius: 10,
              data: this.props.units.map(unit => unit.lessons.filter(lesson => lesson.completed).length)
            }
          ]
        })
      }
    }

    showTheUnitInfo = (event) => {
      if(event[0] !== undefined){
        console.log(event[0]._model.label)
      }
    }
    render(){
      return (
        <div>
        <Bar data={this.state} onElementsClick ={(event) => this.showTheUnitInfo(event)}/>
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