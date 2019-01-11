import { resetCarForm } from './carForm';

const API_URL = process.env.REACT_APP_API_URL;

// Action Creators

const setCars = cars => {
    return {
        type: 'GET_CARS_SUCCESS',
        car
    }  
}

const addCar = car -> {
    return {
        type: 'CREATE_CAR_SUCCESS',

    }
}

// Async Actions 

export const getCars = () => {
    return dispatch => {
        return fetch('${API_URL}/cars')
        .then(response => response.json())
        .then(cars => dispatch(setCars(cars)))
    }
}

export const createCar = car => {
    return dispatch => {
        return fetch('${API_URL}/cars', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ car: car })
        })
        .then(response => response.json())
        .then(car => {
            dispatch(addCar(car))
            dispatch(resetCarForm())
        }
        .catch(error => console.log(error))
    }
}


