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
        car
    }
}

const deleteCar = car => {
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

const sortCars = cars => {
  return {
    type: 'SORT_CAR',
    cars
  }
}

// Async Actions

export const sortCar = (cars) => {
  console.log(cars, 'cars object');
  return dispatch => {
    dispatch({
      type: 'SORT_CARS',
      payload: cars
    })
  }
}

export const getCars = () => {
  return dispatch => {
    console.log("getCars successful")
    return fetch(`${API_URL}/cars`)
    .then(response => response.json())
    .then(cars => {
      dispatch({
        type: 'GET_CARS_SUCCESS',
        payload: cars
      })
    }) 
    .catch(error => console.log(error + ' setCars error'));
  }
}

export const createCar = car => {
  console.log('C')
  return dispatch => {
      return fetch(`${API_URL}/cars`, {
          method: "POST",
          headers: {
              'Content-type': 'application/json'
          },
          body: JSON.stringify({ car: car })
      })
      .then(response => response.json())
      .then(car => {
        console.log('D')
          dispatch(addCar(car))
          dispatch(resetCarForm())
      })
      .catch(error => console.log(error + 'createCar POST failed'))
  }
  console.log('E')
}

export const fetchCar = (carId) => {
    return dispatch => {
        return fetch(`${API_URL}/cars/${carId}`)
            .then(response => response.json())
            .then(car => {
                dispatch(setCars([car]));
            })
            .catch(error => console.log(error));
    }
}

export const removeCar = (carId, routerHistory) => {
    return dispatch => {
      return fetch(`${API_URL}/cars/${carId}`, {
        method: "DELETE"
      })
      .then(response => {
        dispatch(deleteCar(carId));
        routerHistory.replace('/cars');
      })
      .catch(error => console.log(error))
    }
  }

  export const likeCar = (car, cars) => {
    const updatedCar = Object.assign(...car, { likes: car.likes + 1 })
    return dispatch => {
      return fetch(`${API_URL}/cars/${car.id}`, {
        method: "PUT",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({car: updatedCar})
        })
        .then(response => response.json())
        .then(car => {
          dispatch(addLikes(car))
          dispatch(addLikes(cars))
        })
      .catch(error => console.log(error))
    }
  }

 