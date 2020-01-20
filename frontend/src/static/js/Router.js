import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './component/App';
import Apage from './component/Apage';
import Bpage from './component/Bpage';
import Cpage from './component/Cpage';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <App name="testName"/>
                <Apage name="testName"/>
                <Bpage/>
                <Cpage/>
            </BrowserRouter>
        );
    }
}

export default Router;