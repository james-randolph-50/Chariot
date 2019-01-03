import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App />,
    document.getElementById('root')
    );

registerServiceWorker();

var store = {
    cars: [
        {...}
    ],
    carFormData: [
        {
            name: '',
            price: 0,
            img_url: '',
            year: 0
        }
    ]
}