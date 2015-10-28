'use strict';

import React from 'react';
import { Link } from 'react-router';
import { Navbar, NavBrand, Nav, NavItem } from 'react-bootstrap';

export default class Navi extends React.Component {
    render() {
        return (
            <Navbar inverse>
                <NavBrand><Link to="home">Nick Brown</Link></NavBrand>
                <Nav>
                    <NavItem eventKey={1} href="#/home">
                        Home
                    </NavItem>
                    <NavItem eventKey={2} href="#/courses">
                        Courses
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}