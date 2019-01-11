import React, { Component } from 'react';
import Cars from './Cars';
import { getCars } from '../actions/cars';
import './App.css';


class App extends Component {

    render() {
        return (
            <div className="App">
                <Cars />
            </div>
        );
    }
}

export default App;