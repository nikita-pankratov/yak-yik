/**
 * Created by pankratov on 7/9/17.
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Home from './components/layout/Home';

class App extends Component {

    render(){
        return (
            <div>
                Yik-Yak!
                <Home />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));