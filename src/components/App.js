import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import Root from './Layout/VideoMain';
import VideoWatch from './Layout/VideoWatch';
import VideoResults from './Layout/VideoResults';
import Navigation from './Navigation/Navigation';
import history from '../history';

export class App extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Navigation />
                    <Route path='/' exact component={Root}/>
                    <Route path='/results/:searchString' exact component={VideoResults} />
                    <Route path='/watch/:videoId' exact component={VideoWatch} />
                </Router>
            </div>
        )
    }
}

export default App;
