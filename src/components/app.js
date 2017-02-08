import React, {Component} from 'react';
import Header               from './layout/header';
export default class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                {this.props.children}
            </div>
        );
    }
}
