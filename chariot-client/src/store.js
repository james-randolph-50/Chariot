import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';

import thunk from 'redux-thunk';

const carsReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_CAR_SUCCESS';
        return action.cars;

        default:
        return state;
    }
}

const car = carsReducer();
