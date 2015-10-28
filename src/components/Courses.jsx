'use strict';

import React from 'react';
import { ButtonGroup, Button, Accordion, Panel } from 'react-bootstrap';
let data = require('json!./courselist.json');

class Group extends React.Component {
    render() {
        let items = data.courses;
        let by = this.props.by;
        let key = this.props.key;
        let name = this.props.name;
        if (by == 'Course Level') {
            return (
                <Panel header={name} eventKey={key}>
                    <ul>
                        {items.map(function(object,i) {
                            let num = parseInt(object['CourseNumber']);
                            let item = <li>{object['Department']} {object['CourseNumber']} - {object['Title']} ({object['Quarter']})</li>;
                            switch(name) {
                                case 'Graduate':
                                    if (num > 200) { 
                                        return item;
                                    }
                                    break;
                                case 'Upper Division':
                                    if (num >= 100 && num < 200) { 
                                        return item;
                                    }
                                    break;
                                case 'Lower Division': default:
                                    if (num < 100) { 
                                        return item;
                                    }
                                    break;
                            }
                            return;
                        })}
                    </ul>
                </Panel>
            );
        } else {
            return (
                <Panel header={name} eventKey={key}>
                    <ul>
                        {items.map(function(object,i) {
                            if (object[by] == name) {
                                return <li>{object['Department']} {object['CourseNumber']} - {object['Title']} ({object['Quarter']})</li>;
                            } else return;
                        })}
                    </ul>
                </Panel>
            );
        }
    }
}

export default class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {organizeBy: '', courselist: data.courses, groups: []};
    }

    reorganize(by) {
        let key=by;
        if (by == 'Course Level') {
            key = 'CourseNumber';
        }
        var groups = new Set();
        var clist = this.state.courselist;
        switch(by) {
            case 'Course Level':
                groups = ['Lower Division','Upper Division','Graduate'];
                break;
            case 'Department': case 'Quarter':
                groups = clist.filter(function(object) {
                    var val = object[key];
                    return !groups.has(val) && groups.add(val);
                });
                break;
            default:
                break;
        }
        this.setState({organizeBy:by, groups: groups});
    }

    componentDidMount() {
        this.reorganize('Department');
    }

    getClass(by) {
        if (by == this.state.organizeBy) {
            return "active";
        } else {
            return "";
        }
    }

    render() {
        let by = this.state.organizeBy;
        return (
            <div>
                <p>Organizing By: {by}</p>
                <ButtonGroup>
                    <Button bsStyle="primary" onClick={this.reorganize.bind(this,'Course Level')} active={this.getClass.bind(this,'Course Level')}>Course Level</Button>
                    <Button bsStyle="primary" onClick={this.reorganize.bind(this,'Department')} active={this.getClass.bind(this,'Department')}>Department</Button>
                    <Button bsStyle="primary" onClick={this.reorganize.bind(this,'Quarter')} active={this.getClass.bind(this,'Quarter')}>Quarter</Button>
                </ButtonGroup>
                <hr />
                <Accordion>
                    {this.state.groups.map(function(object, i) {
                        var name = object[by];
                        if (by == 'Course Level') {
                            name = object;
                        }
                        return <Group by={by} name={name} key={i} />;
                    })}
                </Accordion>
            </div>
        );
    }
}