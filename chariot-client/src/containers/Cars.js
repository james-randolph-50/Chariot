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
  constructor(props) {
    super(props)
    this.state = {
      cars: []
    };
    this.sortAlphabetically = this.sortAlphabetically.bind(this)
}


sortAlphabetically = (event) => {
    console.log("sort button clicked")
    event.preventDefault()   
    const newArray = [].concat(this.props.cars.cars)
        newArray.sort(function (a,b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
                } 
                return 0;
            })
    this.setState({
        sortedCars: newArray
    })
    }

componentDidMount() {
    this.props.getCars()
}

render() {
    return (
    <div className="CarsContainer">
        <h3>Cars Container</h3> 
            <button onClick={this.sortAlphabetically}>Sort</button>
            {this.props.cars.cars && this.props.cars.cars.map(car => <CarCard delete={this.props.delete} key={car.id} car={car} />)}            
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

