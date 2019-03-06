import React, { Component } from 'react';
import { connect } from 'react-redux';

import CarCard from '../components/CarCard';
import CarForm from './CarForm';
import './Cars.css';
import { getCars } from '../actions/cars';

Component.defaultProps = {
    cars: { cars: [] }
}
class Cars extends Component {

    componentDidMount() {
        this.props.getCars()
    }

    // componentDidUpdate() {
    //     this.props.getCars()
    // }

    render() {
        return (
        <div className="CarsContainer">
            <h3>Cars Container</h3> 
                {this.props.cars.cars && this.props.cars.cars.map(car => <CarCard key={car.id} car={car} />)}            
                <CarForm />
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

