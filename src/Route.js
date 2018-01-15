import React, { Component }from 'react';
import {Router, Route, hashHistory} from 'react-router';
import App from './App.js';
import TimeCardComponent from './components/TimeCardComponent.js'

class RouteReact extends Component {
    render(){
        return(
            <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}> 
                <Route path="/" component={App}/>
                <Route path="/timecard" component={TimeCardComponent} />
            </Router>
        );
    }
}

export default RouteReact;