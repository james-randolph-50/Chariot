import { resetCarForm } from './carForm';

const API_URL = process.env.REACT_APP_API_URL;

// Action Creators

const setCars = cars => {
    return {
        type: 'GET_CARS_SUCCESS',
        cars
    }  
}

const addCar = car => {
    return {
        type: 'CREATE_CAR_SUCCESS',

    }
}

const removeCar = car => {
    return {
        type: 'REMOVE_CAR',
        car
    }
}


const addLikes = car => {
    return {
        type: 'LIKE_CAR',
        car
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
        })
        .catch(error => console.log(error))
    }
}

export const fetchCar = (carId) => {
    return dispatch => {
        return fetch(`${API_URL}/cars/${carId}`)
            .then(response => response.json())
            .then(car => {
                dispatch(setcars([car]));
            })
            .catch(error => console.log(error));
    }
}

export const deletecar = (carId, routerHistory) => {
    return dispatch => {
      return fetch(`${API_URL}/cars/${carId}`, {
        method: "DELETE"
      })
      .then(response => {
        dispatch(removecar(carId));
        routerHistory.replace('/cars');
      })
      .catch(error => console.log(error))
    }
  }
