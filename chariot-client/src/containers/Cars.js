import React from 'react';
import './Cars.css';


const Cars = (props) => (
    <div className="CarsContainer">
        <h3>Cars Component</h3>
        {props.cars.map(car => 
            <div className="CarCard">
                <h3>{car.name}</h3>
                <p>Price: ${car.price}</p>
                <img className="CarImage" src={car.img_url} alt={car.name} />
                <p>Year: {car.year}</p>
            </div>
        )}
    </div>
);

export default Cars;