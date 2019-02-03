import React, { Component } from 'react';
import NavBar from '../containers/NavBar';

class Profile extends Component {
    render(){
        return (
            <div>
                <NavBar />
                <h1>Profile Page</h1>
            </div>
        )
    }
}

export default Profile