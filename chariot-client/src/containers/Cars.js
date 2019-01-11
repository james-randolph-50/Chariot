import React, { Component } from 'react';
import { connect } from 'react-redux';

import CarCard from '../components/CarCard';
import CarForm from './CarForm';
import './Cars.css';
import { getCars } from '../actions/cars';


class Cars extends Component {

    componentDidMount() {
        this.props.getCars
    }

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

const mapStateToProps = (state) => {
    return ({
        cars: state.cars
    })
}

export default connect(mapStateToProps, { getCars })(Cars);

