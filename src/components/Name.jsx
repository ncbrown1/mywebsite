'use strict';

import React from 'react';

export default class Name extends React.Component {
    render() {
        return (
            <p>My name is {this.props.name}.</p>
        );
    }
}