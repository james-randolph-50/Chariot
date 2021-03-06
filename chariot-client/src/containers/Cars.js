import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarCard from '../components/CarCard';
import CarForm from './CarForm';
import './Cars.css';
import { getCars } from '../actions/cars';
import { sortCar } from '../actions/cars';

Component.defaultProps = {
  cars: { cars: [] }
}

class Cars extends Component {
  constructor(props) {
    super(props)
      this.state = {
        cars: [],
        sortedCars: [],
        buttonClicked: false
      };
  }

sortAlphabetically = () => {
   
    const newArray = [].concat(this.props.cars.cars)
    const orgArray = newArray.sort(function (a,b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      } 
      return 0;
    })  
    this.setState({ 
      cars: orgArray,
      buttonClicked: !this.state.buttonClicked
     })
     console.log(this.state.buttonClicked);
}

componentDidMount() {
     this.props.getCars()
  }


render() {

  let display
  if (this.state.buttonClicked) {
        display = this.state.cars && this.state.cars.map(car => <CarCard key={car.id} car={car}/>)  
  } else {
      display = this.props.cars.cars && this.props.cars.cars.map(car => <CarCard key={car.id} car={car} />)
  }

    return (
<div className="CarsContainer">
    <h3>Cars Container</h3> 
        <button onClick={this.sortAlphabetically}>Sort</button>
        {display}
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

const mapDispatchToProps = (dispatch) => {
  return {
    sortCar: (cars) => dispatch(sortCar(cars)),
    getCars: (cars) => dispatch(getCars(cars))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cars);