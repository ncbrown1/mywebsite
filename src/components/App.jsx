'use strict';

import React from 'react';
import {Link} from 'react-router';
import Navi from './Navi.jsx';
import Name from './Name.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <div className="header">
                    <Navi />
                </div>
                <div className="container">
                    {this.props.children}
                </div>
                <div className="footer">
                    <div className="container">
                        <p><span className="glyphicon glyphicon-heart"></span> Nick</p>
                    </div>
                </div>
            </div>
        );
    }
}