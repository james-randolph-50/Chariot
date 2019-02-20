import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCar, removeCar, likeCar } from '../actions/cars';
import CarCard from '../components/CarCard';
import Cars from './Cars';
import LikeButton from '../components/LikeButton';

class CarShow extends Component {
    constructor() {
        super()

        this.state = {
            cars: []
        }
    }

    handleOnDelete = () => {
        this.props.deleteCar(this.props.car, this.props.history)
    }


    componentDidMount() {
        this.props.fetchCar(this.props.match.params.carId);
    }

    render() {
        let car = this.props.car[0];
        const {removeCar, history} = this.props;

        return (
            <div className='carShow'>
                {car ? (
                    <CarCard />
                ) : (
                    <p>Loading Car...</p>
                )}
                <br></br>
                <button onClick={() => removeCar(car.id, history)}>
                    Delete
                </button>
                {car ? <LikeButton car={car} likeCar={this.handleOnClick}/> : 'An Error Occured'}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const car = state.cars.find(car => car.id == ownProps.match.params.carId)
    return ({
        car: state.cars
    })
}

export default connect(mapStateToProps, {fetchCar, removeCar, likeCar})(CarShow);