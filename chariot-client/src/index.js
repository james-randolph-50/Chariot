//import React from 'react';
import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
//import registerServiceWorker from './registerServiceWorker';
import store from './store.js';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    
    document.getElementById('root'));
    //registerServiceWorker();