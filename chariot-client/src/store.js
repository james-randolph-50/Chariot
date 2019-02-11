import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import cars from './reducers/cars';
import carFormData from './reducers/carFormData';

const reducers = combineReducers({
    cars,
    carFormData
});
const middleWare = [thunk];

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleWare)
);