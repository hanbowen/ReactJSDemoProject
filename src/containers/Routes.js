import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import News from './News';
import Home from './Home';

class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/news/:source" component={News}/>
            </div>
        );
    }
}

export default Routes;
