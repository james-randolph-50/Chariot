import React from 'react';

const CarCard = ({ car }) => (
    <div key={car.id} className="CarCard">
        <h3>{car.name}</h3>
        <p>Price: ${car.price}</p>
        <img className="CarImage" src={car.img_url} alt={car.name} />
        <p>Year: {car.year} </p>
    </div>
)

export default CarCard;