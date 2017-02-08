import React, { Component } from 'react';
import {connect}            from 'react-redux';
import {Link}               from 'react-router';
class Header extends Component {
    renderLinks() {
        
            return [
                <li className="nav-item" key={1}>
                    <Link className="nav-link" to="/incidents">Current Incidents</Link>
                </li>,
                <li className="nav-item" key={2}>
                    <Link className="nav-link" to="/team">Team List</Link>
                </li>
            ];
        
    }
    render() {
        return(
            <div className="header">
                <div className="section"></div>
                <div className="section">
                    SARSYS Booking Application
                </div>
                <div className="section"></div>
            </div>
        )
    }
}

export default Header;