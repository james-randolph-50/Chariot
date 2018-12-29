import React, { Component } from 'react';

import CarCard from '../components/CarCard';
import CarForm from './CarForm';
import './Cars.css';


class Cars extends Component {

    render() {
        return (
        <div className="CarsContainer">
            <h3>Cars Component</h3>
            {this.props.cars.map(car => <CarCard key={car.id} car={car} />)}
            <carForm />
        </div>
        );
    }
}


export default Cars;