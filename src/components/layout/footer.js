import React, { Component } from 'react';

import {Link}               from 'react-router';
class Footer extends Component {
    render() {
        return(
            <div className="footer is-marginless">
                <div className="columns">
                    <div className="column is-one-quarter name">
                        Hi ya, Mick
                    </div>
                    <div className="column is-paddingless	">
                        <nav className="nav">
                            <div className="nav-right nav-menu">
                                <a className="nav-item">
                                    Profile
                                </a>
                                <a className="nav-item">
                                    On-call
                                </a>
                
                                <a className="nav-item">
                                    Manage
                                </a>
                            </div>
        
                        </nav>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Footer;