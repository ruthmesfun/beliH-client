import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render(){
        return (
            <div>
                <ul>
                    <li> <Link to ='/'>beliH</Link></li>
                    <li> <Link to ='/courses'>courses</Link></li>
                    <li> <Link to ='/profile'>Profile</Link></li>
                </ul>
            </div>
        )
    }
}

export default NavBar