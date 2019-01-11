const API_URL = process.env.REACT_APP_API_URL;

// Action Creators

const setCars = cars => {
    return {
        type: 'GET_CARS_SUCCESS',
        cars
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


