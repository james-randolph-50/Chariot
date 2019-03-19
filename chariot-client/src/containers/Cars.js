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
  
  // handleSortClick = () => {
  //    this.setState({
  //      buttonClicked: !this.state.buttonClicked})
  //  }

sortAlphabetically = () => {
    //handleSortClick();
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
      cars: {cars: orgArray},
      buttonClicked: !this.state.buttonClicked
     })
     console.log(this.state.buttonClicked);
}

componentDidMount() {
     this.props.getCars()
     this.setState({cars: this.props.cars})
  }


render() {

  let message
  if (this.state.buttonClicked) {
        message = this.state.cars.cars && this.state.cars.cars.map(car => <CarCard key={car.id} car={car}/>)  
  } else {
      message = this.props.cars.cars && this.props.cars.cars.map(car => <CarCard key={car.id} car={car} />)
  }

    return (
<div className="CarsContainer">
    <h3>Cars Container</h3> 
        <button onClick={this.sortAlphabetically}>Sort</button>
        {message}
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