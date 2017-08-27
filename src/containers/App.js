import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

import Frame from './../components/Frame/Frame';
import Topbar from './../components/Topbar/Topbar';
import Sidebar from './../components/Sidebar/Sidebar';
import Routes from './../containers/Routes';

var api = require('./../services/NewsAPIs');

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            language: 'en',
            sources: []
        };
    }

    componentDidMount() {
        api.fetchNewsSources(this.state.language)
            .then(function (response) {
                this.setState({
                    sources: response
                });
            }.bind(this));
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Frame top={<Topbar />} left={<Sidebar items={this.state.sources} />} main={<Routes />}/>
                </Router>
            </div>
        );
    }
}

export default App;
