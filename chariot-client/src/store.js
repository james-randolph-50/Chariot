import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';

import thunk from 'redux-thunk';
import cars from './reducers/cars';
const reducers = combineReducers({
    cars: carsReducer
});
const middleWare = [thunk];

export default createStore(
    reducers,
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&.__REDUX_DEVTOOLS_EXTENSION__()
);