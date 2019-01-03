import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';

import thunk from 'redux-thunk';

const cars = (state = [], action) => {
    switch(action.type) {
        case 'GET_CAR_SUCCESS';
        return action.cars;

        default:
        return state;
    }
}

const reducers = combineReducers({
    cars: carsReducer
});
const middleWare = [thunk];

export default createStore(
    reducers,
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&.__REDUX_DEVTOOLS_EXTENSION__()
);