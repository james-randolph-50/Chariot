import React from 'react';

const Cars = (props) => (
    <div>
        <h3>Cars Component</h3>
        {props.cars.map(car => 
            <div>
                <h3>{car.name}</h3>
                <p>Price: ${car.price}</p>
                <img src={car.img_url} alt={car.name} />
                <p>Year: {car.year}</p>
            </div>
                )}
    </div>
);

export default Cars;