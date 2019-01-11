const API_URL = process.env.REACT_APP_API_URL;

const getCars = () => {
    dispatch => {
        return fetch('${API_URL}/cars')
        .then(response => response.json())
        .then(cars => dispatch(setCars))
    }
}


