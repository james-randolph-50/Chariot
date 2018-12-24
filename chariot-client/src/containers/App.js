import React, { Component } from 'react';
import Cars from './Cars';
import './App.css';

const cars = [
    {
        name: "Tesla Model 3",
        price: 65000,
        img_url: "",
        year: 2018
    },
    {
        name: "Mercedes Something",
        price: 85000,
        img_url: "",
        year: 2018
    }
]

class App extends Component {
    render() {
        return (
            <div className="App">
                <Cars cars={cars} />
            </div>
        );
    }
}

export default App;