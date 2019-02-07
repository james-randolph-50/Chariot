import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCar } from '../actions/carActions';
import { deleteCar } from '../actions/carActions';
import CarForm from './CarForm';
import CarCard from '../components/CarCard';
import Cars from './Cars';
import LikeButton from '../components/LikeButton';
import { likeCar } from '../actions/carActions';

class CarShow extends Component {

    handleOnClick = () => {
        this.props.likeCar(this.props.car[0])
    }

    componentDidMount() {
        this.props.fetchCar(this.props.match.params.carId);
    }

    render() {
        let car = this.props.car[0];
        const {deleteCar, history} = this.props;

        return (
            <div className='carShow'>
                {car ? (
                    <div>
                        <h1 className="carName">{car.name}</h1>
                        <img src="{car.img_url}" style="max-width: 250px; max-height: 250px;"/>
                        <h3>Cost: ${car.price}</h3>
                        <h3>Year: {car.year}</h3>
            </div>
                ) : (
                    <p>Loading Car...</p>
                )}
                <br></br>
                <button onClick={() => deleteCar(car.id, history)}>
                    Delete
                </button>
                {car ? <LikeButton car={car} likeCar={this.handleOnClick}/> : 'An Error Occured'}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        car: state.cars
    })
}

export default connect(mapStateToProps, {fetchCar, deleteCar, likeCar})(CarShow);