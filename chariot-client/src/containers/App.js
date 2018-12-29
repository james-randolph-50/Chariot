import React, { Component } from 'react';
import Cars from './Cars';
import './App.css';


class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cars: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/cars')
        .then(response => response.json())
        .then(cars => this.setState({ cars }))
    }

    render() {
        return (
            <div className="App">
                <Cars cars={this.state.cars} />
            </div>
        );
    }
}

export default App;