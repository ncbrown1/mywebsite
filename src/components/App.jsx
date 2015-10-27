'use strict';

import React from 'react';
import {Link} from 'react-router';
import Navi from './Navi.jsx';
import Name from './Name.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Navi />
                <h1>Hello from the app!</h1>
                <Name name="Nick" />
                <ul>
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="courses">Courses</Link></li>
                    <li><Link to="hello">Hello</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}