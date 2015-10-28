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
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}