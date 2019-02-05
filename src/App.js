import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { connect } from 'react-redux';

//Actions
import { selectStudent } from './actions'

// Containers
import NavBar from './containers/NavBar';

//Routes
import LandingPage from './pages/LandingPage';
import CourseDashboard from './pages/CourseDashboard';
import CourseList from './pages/CourseList';
import Profile from './pages/Profile';



import './App.css';

const STUDENT_URL = 'http://localhost:3000/api/v1/students/1'

class App extends Component {

  componentDidMount(){
    fetch(STUDENT_URL)
    .then(r => r.json())
    .then(student => this.props.selectStudent(student))
}
  
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/dashboard" component={CourseDashboard}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/courses" component={CourseList}/>
          <Route path="/about" />
        </Switch>
      </Router>

    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectStudent: (student) => dispatch(selectStudent(student))
  }
}


export default connect(null, mapDispatchToProps)(App);
