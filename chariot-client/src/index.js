import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import store from './store.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    
    document.getElementById('root')
    );

registerServiceWorker();

// Draft of Router

// ReactDOM.render((
//     <Router>
//         <React.Fragment>
//             <Route path="/" render={Home} />
//             <Route exact path="/about" render={About} />
//             <Route exact path="/login" render={Login} />
//         </React.Fragment>
// </Router>),
//     document.getElementById('root')
// );
