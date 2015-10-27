'use strict';

import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

export default class Hello extends React.Component {
    render() {
        return (
            <ButtonToolbar>
                <Button bsStyle="primary" bsSize="large">Hello</Button>
                <Button bsStyle="large">World</Button>
            </ButtonToolbar>
        );
    }
}