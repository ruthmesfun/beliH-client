import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { connect } from 'react-redux';

//Actions
import { setCourses } from './actions'

// Containers
import NavBar from './containers/NavBar';

//Routes
import LandingPage from './pages/LandingPage';
import CourseDashboard from './pages/CourseDashboard';
import CourseList from './pages/CourseList';
import Profile from './pages/Profile';

import './App.css';

class App extends Component {
  
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


export default connect()(App);
