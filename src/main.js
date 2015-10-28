'use strict';

require('bootstrap');
import './styles/main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, Redirect } from 'react-router';
import createHistory from 'history/lib/createHashHistory';

import Hello from './components/Hello.jsx';
import Name from './components/Name.jsx';
import App from './components/App.jsx';
import Courses from './components/Courses.jsx';
import Home from './components/Home.jsx';

var history = createHistory({
    queryKey: false
});

ReactDOM.render(
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="courses" component={Courses} />
            <Route path="hello" component={Hello} />
            <Redirect from="*" to="/" />
        </Route>
    </Router>,
    document.getElementById('react')
);
