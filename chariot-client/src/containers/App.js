import React, { Component } from 'react';
import Cars from './Cars';
import './App.css';


class App extends Component {

    componentDidMount() {
        fetch('http://localhost:3001/api/cars')
        .then(response => response.json())
    }

    render() {
        return (
            <div className="App">
                <Cars />
            </div>
        );
    }
}

export default App;