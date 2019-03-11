import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCar, getCars, removeCar, likeCar } from '../actions/cars';
import CarCard from '../components/CarCard';

class CarShow extends Component {
    // constructor() {
    //     super()

    //     this.state = {
    //         cars: []
    //     };
    // }

    handleOnDelete = () => {
        this.props.deleteCar(this.props.car, this.props.history)
    }


    componentDidMount() {
        this.props.fetchCar()
        this.props.fetchCar(this.props.match.params.id);
    }

    render() {
        let car = this.props.car[0];
        // const {removeCar, history} = this.props;

        return (
            <div className='carShow'>
                {car ? (
                    <CarCard />
                ) : (
                    <p>Loading Car...</p>
                )}
                <br></br>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        car: state.cars
    }
}

const mapDispatchToProps = dispatch => {
    return {
        delete: car =>
        dispatch({
            type: 'REMOVE_CAR',
            payload: car
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps, {fetchCar, removeCar, likeCar})(CarShow);