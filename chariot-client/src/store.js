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

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;